import { useEffect, useState } from 'react';
import axios from 'axios';
import { useGetIP } from '@/hooks/useGetIP';

//--------------------------------------------------------

export type GeolocationType = {
    latitude: number;
    longitude: number;
};

//--------------------------------------------------------

export const useGetGeolocation = () => {
    const [geolocation, setGeolocation] = useState<GeolocationType>({
        latitude: 0,
        longitude: 0,
    });

    const userIP = useGetIP();

    useEffect(() => {
        if (userIP) {
            axios
                .get(
                    `${process.env.NEXT_PUBLIC_IP2LOCATION_URL}?key=${process.env.NEXT_PUBLIC_IP2LOCATION_API_KEY}&ip=${userIP}&format=json`,
                )
                .then((response) => {
                    setGeolocation({
                        latitude: response.data.latitude,
                        longitude: response.data.longitude,
                    });
                })
                .catch((error) => {
                    console.error('Error fetching IP address:', error);
                });
        }
    }, [userIP]);

    return geolocation;
};
