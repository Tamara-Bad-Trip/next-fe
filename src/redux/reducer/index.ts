import { combineReducers } from 'redux';
import userReducer from './userReducer';
import notificationReducer from './notificationReducer';

const rootReducer = combineReducers({
    user: userReducer,
    notification: notificationReducer,
});

export default rootReducer;
