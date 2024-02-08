'use client';

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/types';

import styles from './modal.module.scss';
import { hideModal } from '@/redux/actions/modal';
import { CreatePointForm } from '@/components/modal/CreatePointForm/CreatePointForm';

//--------------------------------------------------------

export const Modal: React.FC = () => {
    const dispatch = useDispatch();
    const modal = useSelector((state: RootState) => state.modal);

    const handleCloseModal = () => {
        dispatch(hideModal());
    };

    return (
        <div className={`${styles['modal-container']} ${modal?.type ? styles.show : ''}`}>
            <div className={styles['modal-shadow']} onClick={handleCloseModal} />
            <div className={styles.modal}>
                <CreatePointForm />
            </div>
        </div>
    );
};
