'use client';
import React from 'react';

import styles from './button.module.scss';
import { PulseLoader } from 'react-spinners';

interface ButtonProps {
    type?: 'submit' | 'reset' | 'button';
    label?: string;
    onClick?: () => void;
    loading?: boolean;
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    type = 'button',
    label,
    onClick,
    loading = false,
    disabled = false,
}) => {
    return (
        <button onClick={onClick} type={type} className={styles.button} disabled={disabled}>
            {loading ? <PulseLoader color="#fff" /> : label}
        </button>
    );
};
