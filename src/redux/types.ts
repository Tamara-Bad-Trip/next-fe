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

export interface ModalActionPayload {
    type: 'create-point' | 'delete-point';
}

//--------------------------------------------------------

export interface GeolocationActionPayload {
    lat: number;
    lng: number;
}

//--------------------------------------------------------

export interface RootState {
    notification: NotificationActionPayload;
    user: UserActionPayload;
    modal: ModalActionPayload;
    geolocation: GeolocationActionPayload;
}

//--------------------------------------------------------
