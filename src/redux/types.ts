export interface NotificationActionPayload {
    message: string;
    type: 'error' | 'success';
}

//--------------------------------------------------------

export interface UserActionPayload {
    accessToken: string;
    username: string;
}

//--------------------------------------------------------

export interface RootState {
    notification: NotificationActionPayload;
    user: UserActionPayload;
}

//--------------------------------------------------------
