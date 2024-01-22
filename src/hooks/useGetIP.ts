import { useEffect, useState } from 'react';
import axios from 'axios';

export const useGetIP = () => {
    const [ipAddress, setIpAddress] = useState('');

    useEffect(() => {
        axios
            .get(process.env.NEXT_PUBLIC_API64 as string)
            .then((response) => {
                setIpAddress(response.data.ip);
            })
            .catch((error) => {
                console.error('Error fetching IP address:', error);
            });
    }, []);

    return ipAddress;
};
