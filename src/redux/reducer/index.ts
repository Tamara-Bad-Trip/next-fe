import { combineReducers } from 'redux';
import userReducer from './userReducer';
import notificationReducer from './notificationReducer';
import modalReducer from './modalReducer';
import geolocationReducer from './geolocationReducer';

const rootReducer = combineReducers({
    user: userReducer,
    notification: notificationReducer,
    modal: modalReducer,
    geolocation: geolocationReducer,
});

export default rootReducer;
