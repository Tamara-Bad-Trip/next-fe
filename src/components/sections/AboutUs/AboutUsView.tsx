'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Document } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import styles from './AboutUsView.module.scss';
import { Button } from '@/components/common/Button/Button';

//--------------------------------------------------------

interface AboutUsProps {
    content: Document;
}

//--------------------------------------------------------

export const AboutUsView: React.FC<AboutUsProps> = ({ content }) => {
    const [epic, setEpic] = useState<boolean>(false);

    const handleSwitchOffEpicMode = () => setEpic(false);
    const handleSwitchOnEpicMode = () => setEpic(true);

    useEffect(() => {
        let timerId: NodeJS.Timeout | null = null;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleSwitchOffEpicMode();
            }
        };

        if (epic) {
            document.body.style.backgroundColor = '#141414';
            document.body.style.overflow = 'hidden';
            timerId = setTimeout(() => {
                handleSwitchOffEpicMode();
            }, 24000);

            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            if (timerId) {
                clearTimeout(timerId);
            }
            document.body.style.backgroundColor = '#fff';
            document.body.style.overflow = 'auto';

            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [epic]);

    console.log(epic);

    return (
        <section className={epic ? styles['epic-mode'] : styles.section}>
            {epic ? (
                <>
                    <Button label="Skip" onClick={handleSwitchOffEpicMode} />
                    <div className={styles['epic-content']}>{documentToReactComponents(content)}</div>
                </>
            ) : (
                <>{documentToReactComponents(content)}</>
            )}
            {!epic && <Button label="Do Epic" onClick={handleSwitchOnEpicMode} />}
        </section>
    );
};
