import { GeolocationActionPayload } from '../types';

export const SET_GEOLOCATION = 'SET_GEOLOCATION';

export const setGeolocation = (payload: GeolocationActionPayload) => ({
    type: SET_GEOLOCATION,
    payload,
});
