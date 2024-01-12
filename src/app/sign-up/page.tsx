import React from 'react';
import type { Metadata } from 'next';

import { AuthView } from '@/components/sections/Auth/AuthView';
import { SignUpForm } from '@/components/auth/SignUpForm/SignUpForm';

export const metadata: Metadata = {
    title: 'Bad Trip | Sign Up',
    description: 'Generated by create next app',
};

const content = {
    title: `Welcome`,
    subTitle: `Welcome! Please provide information about you`,
    link: { title: `Already have an account?`, link: `Sign in`, href: '/sign-in' },
    form: <SignUpForm />,
};

export default function SignIn() {
    return (
        <main>
            <AuthView content={content} />
        </main>
    );
}