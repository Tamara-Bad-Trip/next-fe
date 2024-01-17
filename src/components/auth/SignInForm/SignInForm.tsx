'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useApiService } from '@/api';
import { showNotification } from '@/redux/actions/notification';

import { TextField } from '@/components/common/TextField/TextField';
import { Button } from '@/components/common/Button/Button';
import { FormProvider } from '@/components/common/FormProvider/FormProvider';

//--------------------------------------------------------

interface FormValues {
    email: string;
    password: string;
}

//--------------------------------------------------------

export const SignInForm = () => {
    const [loading, setIsLoading] = useState<boolean>(false);

    const api = useApiService();
    const dispatch = useDispatch();

    const validationSchema = Yup.object({
        email: Yup.string().required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    const initialValues: FormValues = {
        email: '',
        password: '',
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
        const { email, password } = data;
        try {
            setIsLoading(true);
            const result = await api.auth.signIn({ email, password });
            console.log(result);
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
            <TextField
                id="email"
                type="text"
                label="Email"
                value={values.email}
                onChange={(event) => setValue('email', event.target.value)}
                placeholder="Enter your email"
            />
            <TextField
                id="password"
                type="password"
                label="Password"
                value={values.password}
                onChange={(event) => setValue('password', event.target.value)}
                placeholder="******"
                passwordShow
            />
            <Button type="submit" label="Sign In" loading={isSubmitting && loading} />
        </FormProvider>
    );
};
