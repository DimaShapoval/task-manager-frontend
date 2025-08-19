'use client';

import { useForm } from 'react-hook-form';
import { SignUpFormStyled } from '../sign-up/styled/form.styled';
import { EMAIL_REGEX, PASSWORD_REGEX } from '../sign-up/regex';
import { ButtonStyled } from '@/app/common/Button.styled';
import { useSignInMutation, useSignUpMutation } from '@/redux/services/auth';
import { useRouter } from 'next/navigation';

interface IFormData {
  email: string;
  password: string;
  confirmPassword?: string; // Optional for sign-up forms
}

interface IProps {
  isLogin?: boolean;
}

export default function RegistrationForm({ isLogin = false }: IProps) {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<IFormData>();
  const [signUp, { isError: isSignUpError }] = useSignUpMutation();
  const [signIn, { isError: isSignInError }] = useSignInMutation();
  const router = useRouter();

  const onSubmit = (data: IFormData) => {
    const sendData = {
      email: data.email,
      password: data.password,
    };
    if (isLogin) {
      return signIn(sendData)
        .unwrap()
        .then((response) => {
          localStorage.setItem('token', response.accessToken);
          router.push('/');
        })
        .catch((error) => {
          alert(`Sign-in failed: ${error.data?.message || 'Unknown error'}`);
        });
    }
    signUp(sendData)
      .unwrap()
      .then(() => {
        router.push('/sign-in');
      })
      .catch((error) => {
        alert(`Sign-up failed: ${error.data?.message || 'Unknown error'}`);
      });
  };
  return (
    <SignUpFormStyled onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: EMAIL_REGEX,
              message: 'Invalid email',
            },
          })}
          name="email"
          placeholder="Enter your email"
          className="border border-gray-300 rounded p-2"
        />
        {formErrors.email && (
          <span className="text-red-500">{formErrors.email?.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-sm">
          Password <span className="text-red-500">*</span>
        </label>
        <input
          {...register('password', {
            required: 'Password is required',
            pattern: {
              value: PASSWORD_REGEX,
              message:
                'Password must be at least 8 characters long and contain at least one letter and one number',
            },
          })}
          name="password"
          type="password"
          className="border border-gray-300 rounded p-2"
          placeholder="Enter your password"
        />
        {formErrors.password && (
          <span className="text-red-500">{formErrors.password?.message}</span>
        )}
      </div>
      {!isLogin && (
        <div className="flex flex-col gap-2">
          <label htmlFor="confirmPassword">
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <input
            {...register('confirmPassword', {
              required: 'Confirm Password is required',
              validate: (value, formValues) =>
                value === formValues.password || 'Passwords do not match',
            })}
            name="confirmPassword"
            type="password"
            className="border border-gray-300 rounded p-2"
            placeholder="Confirm your password"
          />
          {formErrors.confirmPassword && (
            <span className="text-red-500">
              {formErrors.confirmPassword?.message}
            </span>
          )}
        </div>
      )}

      <ButtonStyled type="submit">Submit</ButtonStyled>
    </SignUpFormStyled>
  );
}
