'use client';

import React from 'react';
import { Document } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import styles from './ContactUsView.module.scss';
import { ContactUsForm } from '@/components/contactUsForm/ContactUsForm';

//--------------------------------------------------------

interface ContactUsProps {
    title: Document;
    organizationData: Document;
}

//--------------------------------------------------------

export const ContactUsView: React.FC<ContactUsProps> = ({ title, organizationData }) => {
    return (
        <section className={styles.section}>
            {documentToReactComponents(title)}
            <div className={styles['content-wrapper']}>
                <div className={styles['right-part']}>{documentToReactComponents(organizationData)}</div>
                <ContactUsForm />
            </div>
        </section>
    );
};
