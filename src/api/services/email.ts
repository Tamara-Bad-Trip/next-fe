import axios from 'axios';

import { endpoints } from '../endpoints';
import { SendMessage } from '../types';

export const _sendEmail = async (data: SendMessage) => {
    const headers = {
        'Content-Type': 'application/json',
    };
    const response = await axios.post(endpoints.email, data, { headers });
    return response.data;
};
