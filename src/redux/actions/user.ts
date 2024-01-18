import { UserActionPayload } from "../types";

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const loginUser = (user: UserActionPayload) => {
    return {
        type: LOGIN_USER,
        payload: user,
    };
};

export const logoutUser = () => {
    return {
        type: LOGOUT_USER,
    };
};
