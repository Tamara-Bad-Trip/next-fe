'use client';

import Link from 'next/link';

import { SocialMediaButton } from '@/components/common/SocialMediaButton/SocialMediaButton';

import styles from './auth.module.scss';

//--------------------------------------------------------

interface AuthContent {
    title: string;
    subTitle: string;
    link: { title: string; link: string; href: string };
    form: React.JSX.Element;
}

interface AuthViewProps {
    content: AuthContent;
}

//--------------------------------------------------------

export const AuthView = ({ content }: AuthViewProps) => {
    return (
        <section className={styles.section}>
            <div className={styles['left-part']}>
                <h1 className={styles.title}>{content.title}</h1>
                <h3 className={styles['sub-title']}>{content.subTitle}</h3>
                <div className={styles['social-buttons-group']}>
                    <SocialMediaButton social="google" onClick={() => console.log('google')} />
                    <SocialMediaButton social="twitter" onClick={() => console.log('twitter')} />
                    <span className={styles['or-line']}>OR</span>
                </div>
                {content.form}
                <p className={styles['have-account']}>
                    {content.link.title}
                    <Link href={content.link.href}>{content.link.link}</Link>
                </p>
            </div>
            <div className={styles['right-part-bg']} />
        </section>
    );
};
