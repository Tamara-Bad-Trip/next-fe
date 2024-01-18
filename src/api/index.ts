import * as user from './auth';

export function useApiService() {
    return {
        auth: {
            signUp: user._signUp,
            signIn: user._signIn,
        },
    };
}
