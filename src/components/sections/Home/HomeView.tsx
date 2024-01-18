'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '@/redux/actions/user';
import { RootState } from '@/redux/types';

import { Button } from '@/components/common/Button/Button';

import styles from './home.module.scss';

//--------------------------------------------------------

export const HomeView = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const user = useSelector((state: RootState) => state.user);

    useEffect(() => {
        if (!user) {
            router.push(`/sign-in`);
        }
    }, [user]);

    const handleLogOut = () => {
        dispatch(logoutUser());
    };

    return (
        <section className={styles.section}>
            <h1>{`Hello ${user?.username}`}</h1>
            <Button label="Sign Out" onClick={handleLogOut} />
        </section>
    );
};
