'use client';

import { useForm, FormProvider } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { TextField } from '@/components/common/TextField/TextField';
import { Button } from '@/components/common/Button/Button';

//--------------------------------------------------------

interface FormValues {
    email: string;
    password: string;
    userName: string;
}

//--------------------------------------------------------

export const SignUpForm = () => {
    const onSubmit = (values: any) => {
        console.log(values);
    };

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
        setValue,
        handleSubmit,
        formState: { isSubmitting, isDirty },
    } = methods;

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <TextField id="email" type="text" label="Email" placeholder="Enter your email" />
                <TextField id="password" type="text" label="Password" placeholder="Enter your password" />
                <TextField id="userName" type="text" label="User Name" placeholder="Enter your User Name" />
                <Button type="submit" label="Sign Up" disabled={!isDirty} loading={isSubmitting} />
            </form>
        </FormProvider>
    );
};
