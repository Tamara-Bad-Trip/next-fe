'use client';

import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Loader } from '@googlemaps/js-api-loader';
import { GeolocationType } from '@/hooks/useGetGeolocation';

import styles from './map-component.module.scss';
import { showModal } from '@/redux/actions/modal';
import { setGeolocation } from '@/redux/actions/geolocation';

//--------------------------------------------------------

interface MapComponentProps {
    geolocation: GeolocationType;
}

//--------------------------------------------------------

export const MapComponent: React.FC<MapComponentProps> = ({ geolocation }) => {
    const mapRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();

    const handleShowModal = () => {
        dispatch(showModal({ type: 'create-point' }));
    };

    const handleSetGeolocation = (lat: number, lng: number) => {
        dispatch(setGeolocation({ lat, lng }));
    };

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
                disableDefaultUI: true,
                disableDoubleClickZoom: true,
                clickableIcons: false,
                zoom: 12,
                mapId: 'NEXT_FE_BAD_TRIP',
            };

            const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

            map.setOptions({ draggableCursor: 'pointer' });

            map.addListener('click', (event: google.maps.MapMouseEvent) => {
                const clickedLatLng = event?.latLng?.toJSON();
                handleShowModal();
                handleSetGeolocation(clickedLatLng?.lat as number, clickedLatLng?.lng as number);
            });

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
