'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './navigation.module.scss';

import homeIcon from '@/assets/navigation/home.svg';
import homeIconLight from '@/assets/navigation/home-light.svg';
import aboutUsIcon from '@/assets/navigation/about-us.svg';
import aboutUsIconLight from '@/assets/navigation/about-us-light.svg';
import contactIcon from '@/assets/navigation/contact.svg';
import contactIconLight from '@/assets/navigation/contact-light.svg';
import { usePathname, useRouter } from 'next/navigation';

//--------------------------------------------------------

const content = [
    {
        id: '1',
        src: homeIcon,
        srcLight: homeIconLight,
        href: '/',
        label: 'Home',
    },
    {
        id: '2',
        src: aboutUsIcon,
        srcLight: aboutUsIconLight,
        href: '/about-us',
        label: 'About',
    },
    {
        id: '3',
        src: contactIcon,
        srcLight: contactIconLight,
        href: '/contact',
        label: 'Contact',
    },
];

//--------------------------------------------------------

export const Navigation: React.FC = () => {
    const pathname = usePathname();

    return (
        <nav className={styles.nav}>
            {content.map((link) => (
                <Link
                    href={link.href}
                    key={link.id}
                    className={`${styles.link} ${pathname === link.href && styles.active}`}
                >
                    <Image src={pathname === link.href ? link.srcLight : link.src} alt={link.label} />
                    <span>{link.label}</span>
                </Link>
            ))}
        </nav>
    );
};
