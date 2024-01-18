'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

import { SocialMediaButton } from '@/components/common/SocialMediaButton/SocialMediaButton';

import styles from './auth.module.scss';
import { api } from '@/api/endpoints';
import { loginUser } from '@/redux/actions/user';
import { RootState } from '@/redux/types';
import { showNotification } from '@/redux/actions/notification';

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
    const router = useRouter();
    const dispatch = useDispatch();

    const searchParams = useSearchParams();
    const accessToken = searchParams.get('accessToken');
    const username = searchParams.get('username');

    const user = useSelector((state: RootState) => state.user);

    useEffect(() => {
        if (accessToken && username && !user) {
            dispatch(loginUser({ accessToken, username }));
        }
    }, [accessToken, username, dispatch]);

    useEffect(() => {
        if (user) {
            dispatch(
                showNotification({
                    message: 'Glad to see you!',
                    type: 'success',
                }),
            );
            router.push('/');
        }
    }, [user, router]);

    const handleSignInWithSocial = async (socialMedia: 'twitter' | 'google') => {
        switch (socialMedia) {
            case 'google':
                router.push(`${api}/user/google`);
                break;
            case 'twitter':
                router.push(`${api}/user/twitter`);
                break;
            default:
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
