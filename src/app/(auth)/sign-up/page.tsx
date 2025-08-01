import { Metadata } from 'next';
import SignUpForm from './components/SignUpForm';

export const metadata: Metadata = {
    title: 'Sign Up - Task Manager',
    authors: [{ name: 'Dmytro Shapoval' }],
    keywords: ['task manager', 'next.js', 'react'],
    creator: 'Dmytro Shapoval',
    publisher: 'Dmytro Shapoval',
    description:
        'This is a task manager application built with Next.js and React. It created like pet project to learn Next.js and React.',
};
export default function SignUp() {

    return (
        <div className="flex flex-col">
            <h1 className="text-5xl font-extrabold mt-[50px]">Sign Up</h1>
            <p className="text-gray-600 mt-3">
                Please fill in the form to create an account.
            </p>
            <SignUpForm />
            
        </div>
    );
}
