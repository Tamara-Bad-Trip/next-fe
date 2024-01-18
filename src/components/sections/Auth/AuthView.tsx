'use client';

import Link from 'next/link';

import { SocialMediaButton } from '@/components/common/SocialMediaButton/SocialMediaButton';

import styles from './auth.module.scss';
import { useApiService } from '@/api';

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
    const api = useApiService();

    const handleSignInWithSocial = async (socialMedia: 'twitter' | 'google') => {
        let result;

        switch (socialMedia) {
            case 'google':
                result = await api.auth.signInGoogle();
                break;
            case 'twitter':
                result = await api.auth.signInTwitter();
                break;
            default:
        }

        if (result) {
            console.log(result);
        }
    };

    return (
        <section className={styles.section}>
            <div className={styles['left-part']}>
                <h1 className={styles.title}>{content.title}</h1>
                <h3 className={styles['sub-title']}>{content.subTitle}</h3>

                {content.form}
                <div className={styles['social-buttons-group']}>
                    <span className={styles['or-line']}>OR</span>
                    <SocialMediaButton social="google" onClick={() => handleSignInWithSocial('google')} />
                    <SocialMediaButton social="twitter" onClick={() => handleSignInWithSocial('twitter')} />
                </div>
                <p className={styles['have-account']}>
                    {content.link.title}
                    <Link href={content.link.href}>{content.link.link}</Link>
                </p>
            </div>
            <div className={styles['right-part-bg']} />
        </section>
    );
};
