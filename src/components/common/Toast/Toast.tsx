'use client';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';

import { hideNotification } from '@/redux/actions/notification';
import { RootState } from '@/redux/types';

import errorIcon from '@/assets/toast/error.svg';
import successIcon from '@/assets/toast/success.svg';

import styles from './toast.module.scss';

// TODO: refactoring, need to create file of constants;
const DURATION = 3000;

export const Toast: React.FC = () => {
    const dispatch = useDispatch();
    const notification = useSelector((state: RootState) => state.notification);

    let iconSrc;

    switch (notification?.type) {
        case 'error':
            iconSrc = errorIcon;
            break;
        case 'success':
            iconSrc = successIcon;
            break;
        default:
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(hideNotification());
        }, DURATION);
        return () => {
            clearTimeout(timer);
        };
    }, [dispatch, notification]);

    return (
        <div className={`${styles.toast} ${styles[notification?.type]} ${notification?.message ? styles.show : ''}`}>
            {notification?.message && <Image src={iconSrc} alt={`${notification?.type} icon`} />}
            <p>{notification?.message}</p>
        </div>
    );
};
