import RegistrationForm from '../(components)/registerForm';

export default function Auth() {
  return (
    <div className="flex flex-col">
      <h1 className="text-5xl font-extrabold mt-[50px]">Sign In</h1>
      <p className="text-gray-600 mt-3">
        Please fill out the form to log in to your account
      </p>
      <RegistrationForm isLogin={true} />
    </div>
  );
}
