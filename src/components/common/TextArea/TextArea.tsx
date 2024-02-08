import React, { useState, ChangeEvent } from 'react';

import styles from './text-area.module.scss';

interface TextAreaProps {
    label?: string;
    placeholder?: string;
    id: string;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea: React.FC<TextAreaProps> = ({ label, placeholder, id, value, onChange }) => {
    return (
        <div className={styles.container}>
            {label && (
                <label htmlFor={id} className={styles.label}>
                    {label}
                </label>
            )}
            <div className={styles['textarea-container']}>
                <textarea
                    id={id}
                    placeholder={placeholder ? placeholder : ''}
                    value={value}
                    onChange={onChange}
                    className={styles.textarea}
                />
            </div>
        </div>
    );
};
