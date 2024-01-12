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
}

//--------------------------------------------------------

export const SignInForm = () => {
    const onSubmit = (values: any) => {
        console.log(values);
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().min(8, 'Password must be at least 6 characters').required('Password is required'),
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
        setValue,
        handleSubmit,
        formState: { isSubmitting, isDirty },
    } = methods;

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <TextField id="email" type="text" label="Email" placeholder="Enter your email" />
                <TextField id="password" type="password" label="Password" placeholder="******" passwordShow />
                <Button type="submit" label="Sign In" />
            </form>
        </FormProvider>
    );
};
