'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useApiService } from '@/api';
import { SendMessage } from '@/api/types';
import { showNotification } from '@/redux/actions/notification';

import { TextField } from '@/components/common/TextField/TextField';
import { Button } from '@/components/common/Button/Button';
import { FormProvider } from '@/components/common/FormProvider/FormProvider';
import { TextArea } from '../common/TextArea/TextArea';

//--------------------------------------------------------

interface FormValues {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    message: string;
}

//--------------------------------------------------------

export const ContactUsForm = () => {
    const [loading, setIsLoading] = useState<boolean>(false);

    const api = useApiService();
    const dispatch = useDispatch();

    const validationSchema = Yup.object({
        firstName: Yup.string().required('Firs Name is required'),
        lastName: Yup.string().required('Last name is required'),
        phone: Yup.string().required('Phone is required'),
        email: Yup.string().required('Email is required'),
        message: Yup.string().required('Message is required'),
    });

    const initialValues: FormValues = {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
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
        try {
            setIsLoading(true);
            const result = await api.sendEmail(data as SendMessage);
            if (result) {
                dispatch(
                    showNotification({
                        message: 'Thank you! The message has been sent',
                        type: 'success',
                    }),
                );
            }
        } catch (error) {
            console.error(error);
            dispatch(
                showNotification({
                    message: (error as { response?: { data?: { message?: string } } })?.response?.data
                        ?.message as string,
                    type: 'error',
                }),
            );
        } finally {
            reset();
        }
    });

    return (
        <FormProvider methods={methods} onSubmit={onSubmit}>
            <div>
                <TextField
                    id="firstName"
                    type="text"
                    label="First Name"
                    value={values.firstName}
                    onChange={(event) => setValue('firstName', event.target.value)}
                />
                <TextField
                    id="lastName"
                    type="text"
                    label="Last Name"
                    value={values.lastName}
                    onChange={(event) => setValue('lastName', event.target.value)}
                />
            </div>
            <div>
                <TextField
                    id="phone"
                    type="text"
                    label="Phone number"
                    value={values.phone}
                    onChange={(event) => setValue('phone', event.target.value)}
                />
                <TextField
                    id="email"
                    type="text"
                    label="Email"
                    value={values.email}
                    onChange={(event) => setValue('email', event.target.value)}
                />
            </div>
            <TextArea
                id="message"
                label="Message"
                value={values.message}
                onChange={(event) => setValue('message', event.target.value)}
            />
            <Button type="submit" label="Send Message" loading={isSubmitting && loading} />
        </FormProvider>
    );
};
