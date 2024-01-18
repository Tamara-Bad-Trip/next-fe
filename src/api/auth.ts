import axios from 'axios';

import { endpoints } from './endpoints';
import { SignInArgs, SignUpArgs } from './types';

export const _signUp = async (data: SignUpArgs) => {
    const headers = {
        'Content-Type': 'application/json',
    };
    const response = await axios.post(endpoints.auth.signUp, data, { headers });
    return response.data;
};

export const _signIn = async (data: SignInArgs) => {
    const headers = {
        'Content-Type': 'application/json',
    };

    const response = await axios.post(endpoints.auth.signIn, data, { headers });
    return response.data;
};

export const _signInGoogle = async () => {
    try {
        const response = await axios.get(endpoints.auth.signInGoogle);
        return response.data;
    } catch (error) {
        console.error('Error signing in with Google:', error);
        throw error;
    }
};

export const _signInTwitter = async () => {
    try {
        const response = await axios.get(endpoints.auth.signInTwitter);
        return response.data;
    } catch (error) {
        console.error('Error signing in with Twitter:', error);
        throw error;
    }
};
