import axios from 'axios';

import { endpoints } from './endpoints';

export const _signUp = () => async (data: any) => {
    const response = await axios.post(endpoints.auth.signUp, data);
    return response.data; // as IUser;
};

export const _signIn = () => async (data: any) => {
    const response = await axios.post(endpoints.auth.signIn, data);
    return response.data; // as IUser;
};

export const _signInGoogle = () => async () => {
    const response = await axios.get(endpoints.auth.signInGoogle);
    return response.data; // as IUser;
};

export const _signInTwitter = () => async () => {
    const response = await axios.get(endpoints.auth.signInTwitter);
    return response.data; // as IUser;
};
