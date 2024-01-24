import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from '../actions/notification';
import { NotificationActionPayload } from '../types';

const initialState = null;

const notificationReducer = (state = initialState, action: { type: string; payload: NotificationActionPayload }) => {
    switch (action.type) {
        case SHOW_NOTIFICATION:
            return action.payload;
        case HIDE_NOTIFICATION:
            return null;
        default:
            return state;
    }
};

export default notificationReducer;
