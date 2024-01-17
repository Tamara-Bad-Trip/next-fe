'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useApiService } from '@/api';

import { TextField } from '@/components/common/TextField/TextField';
import { Button } from '@/components/common/Button/Button';
import { FormProvider } from '@/components/common/FormProvider/FormProvider';
import { useRouter } from 'next/navigation';
import { showNotification } from '@/redux/actions/notification';

//--------------------------------------------------------

interface FormValues {
    email: string;
    password: string;
    userName: string;
}

//--------------------------------------------------------

export const SignUpForm = () => {
    const [loading, setIsLoading] = useState<boolean>(false);

    const router = useRouter();
    const api = useApiService();
    const dispatch = useDispatch();

    const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string()
            .matches(
                passwordRegEx,
                'Password must contain minimum 8 and maximum 20 characters, at least one uppercase letter, one lowercase letter, one number, and one special character',
            )
            .required('Password is required'),
        userName: Yup.string().required('User name is required'),
    });

    const initialValues: FormValues = {
        email: '',
        password: '',
        userName: '',
    };

    const methods = useForm<FormValues>({
        resolver: yupResolver(validationSchema),
        defaultValues: initialValues,
    });

    const {
        reset,
        handleSubmit,
        watch,
        setValue,
        formState: { isSubmitting },
    } = methods;

    const values = watch();

    const onSubmit = handleSubmit(async (data) => {
        const { email, password, userName } = data;
        try {
            setIsLoading(true);
            const result = await api.auth.signUp({ username: userName, email, password });
            if (result) {
                dispatch(
                    showNotification({
                        message: 'Account created!',
                        type: 'success',
                    }),
                );
                router.push(`/sign-in`);
            }
        } catch (error) {
            console.error(error);
            reset();
            dispatch(
                showNotification({
                    message: typeof error === 'string' ? error : (error as Error).message,
                    type: 'error',
                }),
            );
        }
    });

    return (
        <FormProvider methods={methods} onSubmit={onSubmit}>
            {/* {!!errorMsg && <Alert severity="error">{errorMsg}</Alert>} */}
            <TextField
                id="email"
                type="text"
                label="Email"
                placeholder="Enter your email"
                value={values.email}
                onChange={(event) => setValue('email', event.target.value)}
            />
            <TextField
                id="password"
                type="text"
                label="Password"
                placeholder="Enter your password"
                value={values.password}
                onChange={(event) => setValue('password', event.target.value)}
            />
            <TextField
                id="userName"
                type="text"
                label="User Name"
                placeholder="Enter your User Name"
                value={values.userName}
                onChange={(event) => setValue('userName', event.target.value)}
            />
            <Button type="submit" label="Sign Up" loading={isSubmitting && loading} />
        </FormProvider>
    );
};
function dispatch(arg0: { type: string; payload: string }) {
    throw new Error('Function not implemented.');
}
