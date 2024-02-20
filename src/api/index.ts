import * as auth from './services/auth';
import * as email from './services/email';

export function useApiService() {
    return {
        auth: {
            signUp: auth._signUp,
            signIn: auth._signIn,
        },
        sendEmail: email._sendEmail,
    };
}
