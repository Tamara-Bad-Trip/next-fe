export const api =
    process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BE_PROD : process.env.NEXT_PUBLIC_BE_DEVELOP;

export const endpoints = {
    auth: {
        signUp: `${api}/user`,
        signIn: `${api}/user/sign-in`,
    },
    email: `${api}/email`,
};
