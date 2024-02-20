export type SignInArgs = {
    email: string;
    password: string;
};

export type SignUpArgs = {
    username: string;
    email: string;
    password: string;
};

export type SendMessage = {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    message: string;
};
