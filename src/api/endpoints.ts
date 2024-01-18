let api;

if (process.env.NODE_ENV === 'production') {
    api = process.env.NEXT_PUBLIC_BE;
} else {
    api = 'http://localhost:3001';
}

export const endpoints = {
    auth: {
        signUp: `${api}/user`,
        signIn: `${api}/user/sign-in`,
        signInGoogle: `${api}/user/google`,
        signInTwitter: `${api}/users/twitter`,
    },
};
