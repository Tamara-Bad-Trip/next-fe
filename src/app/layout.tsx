import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { Providers } from '@/components/template/Providers/Providers';

import '../styles/globals.scss';
import { Toast } from '@/components/common/Toast/Toast';
import { Modal } from '@/components/common/Modal/Modal';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
    title: 'Bad Trip',
    description: 'Generated by create next app',
    icons: {
        icon: ['/favicon.ico?v=4'],
        apple: ['/apple-touch-icon.png?v=4'],
        shortcut: ['/apple-touch-icon.png?v=4'],
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={roboto.className} suppressHydrationWarning={true}>
                <Providers>
                    <Modal />
                    <Toast />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
