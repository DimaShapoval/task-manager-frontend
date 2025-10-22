import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from './Header';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import ReduxProvider from './redux-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Task Manager',
  authors: [{ name: 'Dmytro Shapoval' }],
  keywords: ['task manager', 'next.js', 'react'],
  creator: 'Dmytro Shapoval',
  publisher: 'Dmytro Shapoval',
  description:
    'This is a task manager application built with Next.js and React. It created like pet project to learn Next.js and React.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-200`}
      >
        <Header />
        <ReduxProvider>
          <div className="px-[50px]">{children}</div>
        </ReduxProvider>
      </body>
    </html>
  );
}
