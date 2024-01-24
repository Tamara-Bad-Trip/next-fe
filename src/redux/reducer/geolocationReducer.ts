import { SET_GEOLOCATION } from '../actions/geolocation';
import { GeolocationActionPayload } from '../types';

const initialState = null;

const geolocationReducer = (state = initialState, action: { type: string; payload: GeolocationActionPayload }) => {
    switch (action.type) {
        case SET_GEOLOCATION:
            return action.payload;
        default:
            return state;
    }
};

export default geolocationReducer;
