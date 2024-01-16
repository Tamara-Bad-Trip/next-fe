const api = process.env.NEXT_PUBLIC_BE;

export const endpoints = {
    auth: {
        signUp: `${api}/user/sign-up`,
        signIn: `${api}/user/sign-in`,
        signInGoogle: `${api}/user/google`,
        signInTwitter: `${api}/users/twitter`,
    },
};
