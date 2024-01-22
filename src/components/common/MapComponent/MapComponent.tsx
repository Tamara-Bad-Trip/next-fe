'use client';

import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

import styles from './map-component.module.scss';
import { GeolocationType } from '@/hooks/useGetGeolocation';

//--------------------------------------------------------

interface MapComponentProps {
    geolocation: GeolocationType;
}

//--------------------------------------------------------

export const MapComponent: React.FC<MapComponentProps> = ({ geolocation }) => {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initMap = async () => {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string,
                version: 'weekly',
            });

            const { Map } = await loader.importLibrary('maps');

            const { Marker } = (await loader.importLibrary('marker')) as google.maps.MarkerLibrary;

            const position = {
                lat: geolocation.latitude,
                lng: geolocation.longitude,
            };

            const mapOptions: google.maps.MapOptions = {
                center: position,
                zoom: 12,
                mapId: 'NEXT_FE_BAD_TRIP',
            };

            const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

            const marker = new Marker({
                map,
                position,
            });
        };
        if (geolocation.latitude && geolocation.longitude) {
            initMap();
        }
    }, [geolocation]);

    return <div className={styles['map-container']} ref={mapRef} />;
};
