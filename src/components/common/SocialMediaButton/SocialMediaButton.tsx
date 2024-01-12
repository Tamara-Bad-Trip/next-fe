'use client';
import React from 'react';

import { PulseLoader } from 'react-spinners';
import Image from 'next/image';
import styles from './social-media-button.module.scss';

import googleIcon from '@/assets/social-medias/google.svg';
import twitterIcon from '@/assets/social-medias/twitter.svg';

interface ButtonProps {
    social: 'twitter' | 'google';
    onClick?: () => void;
    loading?: boolean;
    disabled?: boolean;
}

const label = 'Continue with';

export const SocialMediaButton: React.FC<ButtonProps> = ({ social, onClick, loading = false, disabled = false }) => {
    let iconSrc;

    switch (social) {
        case 'google':
            iconSrc = googleIcon;
            break;
        case 'twitter':
            iconSrc = twitterIcon;
            break;
        default:
    }

    return (
        <button onClick={onClick} type="button" disabled={disabled} className={`${styles.button} ${styles[social]}`}>
            {loading ? (
                <PulseLoader color="#fff" />
            ) : (
                <span className={styles['button-label']}>
                    <p>{label}</p>
                    <Image src={iconSrc} alt={`${social} icon`} />
                </span>
            )}
        </button>
    );
};
