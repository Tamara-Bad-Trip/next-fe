'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Lottie from 'lottie-react';

import { Button } from '@/components/common/Button/Button';

import styles from './404error.module.scss';

import animation from '@/assets/lottie/404-stop.json';

//--------------------------------------------------------

export const ErrorView = () => {
    const router = useRouter();

    const handleReturnHomePage = () => router.push(`/`);

    return (
        <section className={styles.section}>
            <Lottie animationData={animation} loop={true} />
            <Button label="Return to home page" onClick={handleReturnHomePage} />
        </section>
    );
};
