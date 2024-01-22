'use client';

import React, { useState, ChangeEvent } from 'react';
import Image from 'next/image';

import styles from './text-field.module.scss';

import passwordHiddenIcon from '@/assets/password-hidden.svg';
import passwordOpenedIcon from '@/assets/password-opened.svg';

//--------------------------------------------------------

interface TextFieldProps {
    type?: 'text' | 'password';
    label?: string;
    placeholder?: string;
    id: string;
    value?: string;
    passwordShow?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

//--------------------------------------------------------

export const TextField: React.FC<TextFieldProps> = ({
    type = 'text',
    label,
    placeholder,
    id,
    value,
    onChange,
    passwordShow = false,
}) => {
    const [inputType, setInputType] = useState<'text' | 'password'>(type);

    const toggleInputType = () => {
        setInputType((prevType) => (prevType === 'text' ? 'password' : 'text'));
    };

    return (
        <div className={styles['text-field-container']}>
            {label && (
                <label htmlFor={id} className={styles.label}>
                    {label}
                </label>
            )}
            <div className={styles['input-container']}>
                <input
                    type={inputType}
                    id={id}
                    placeholder={placeholder ? placeholder : ''}
                    value={value}
                    onChange={onChange}
                    className={styles.input}
                />
                {!!passwordShow && (
                    <button type="button" onClick={toggleInputType} className={styles['show-password-button']}>
                        <Image
                            src={inputType === 'text' ? passwordOpenedIcon : passwordHiddenIcon}
                            alt={inputType === 'text' ? 'Hide Password' : 'Show Password'}
                            width={30}
                            height={30}
                        />
                    </button>
                )}
            </div>
        </div>
    );
};
