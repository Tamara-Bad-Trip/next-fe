import * as user from './auth';

export function useApiService() {
    return {
        auth: {
            signUp: user._signUp,
            signIn: user._signIn,
            signInGoogle: user._signInGoogle,
            signInTwitter: user._signInTwitter,
        },
    };
}
