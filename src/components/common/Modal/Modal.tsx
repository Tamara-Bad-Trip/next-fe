'use client';

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/types';

import styles from './modal.module.scss';
import { hideModal } from '@/redux/actions/modal';

//--------------------------------------------------------

export const Modal: React.FC = () => {
    const dispatch = useDispatch();
    const modal = useSelector((state: RootState) => state.modal);

    const handleCloseModal = () => {
        dispatch(hideModal());
    };

    console.log(modal);

    return (
        <div className={`${styles['modal-shadow']} ${modal?.type ? styles.show : ''}`} onClick={handleCloseModal}>
            <div className={styles.modal}></div>
        </div>
    );
};
