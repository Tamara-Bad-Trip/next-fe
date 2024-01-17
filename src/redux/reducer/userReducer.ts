import { LOGIN_USER, LOGOUT_USER } from '../actions/user';
import { UserActionPayload } from '../types';

const userReducer = (state = null, action: { type: any; payload: UserActionPayload }) => {
    switch (action.type) {
        case LOGIN_USER:
            return action.payload;
        case LOGOUT_USER:
            return null;
        default:
            return state;
    }
};

export default userReducer;
