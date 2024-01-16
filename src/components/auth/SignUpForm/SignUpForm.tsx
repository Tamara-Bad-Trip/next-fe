'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useApiService } from '@/api';

import { TextField } from '@/components/common/TextField/TextField';
import { Button } from '@/components/common/Button/Button';
import { FormProvider } from '@/components/common/FormProvider/FormProvider';

//--------------------------------------------------------

interface FormValues {
    email: string;
    password: string;
    userName: string;
}

//--------------------------------------------------------

export const SignUpForm = () => {
    const [errorMsg, setErrorMsg] = useState<string>('');
    const [loading, setIsLoading] = useState<boolean>(false);

    const api = useApiService();

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
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
                const user = await api.auth.signIn({ email, password });
                console.log(user);
            }
        } catch (error) {
            console.error(error);
            reset();
            // setErrorMsg(typeof error === 'string' ? error : (error?.message as string as));
        }
    });

    return (
        <FormProvider methods={methods} onSubmit={onSubmit}>
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
