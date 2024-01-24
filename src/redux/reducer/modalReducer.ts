import { SHOW_MODAL, HIDE_MODAL } from '../actions/modal';
import { ModalActionPayload } from '../types';

const initialState = null;

const modalReducer = (state = initialState, action: { type: string; payload: ModalActionPayload }) => {
    switch (action.type) {
        case SHOW_MODAL:
            return action.payload;
        case HIDE_MODAL:
            return null;
        default:
            return state;
    }
};

export default modalReducer;
