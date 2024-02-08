'use client';

import React from 'react';
import { Document } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import styles from './AboutUsView.module.scss';

//--------------------------------------------------------

interface AboutUsProps {
    content: Document;
}

//--------------------------------------------------------

export const AboutUsView: React.FC<AboutUsProps> = ({ content }) => {
    return <section className={styles.section}>{documentToReactComponents(content)}</section>;
};
