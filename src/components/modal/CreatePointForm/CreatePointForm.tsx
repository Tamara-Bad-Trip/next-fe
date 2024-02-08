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
import { loginUser } from '@/redux/actions/user';
import { TextArea } from '@/components/common/TextArea/TextArea';

//--------------------------------------------------------

interface FormValues {
    title: string;
    description?: string;
}

//--------------------------------------------------------

export const CreatePointForm = () => {
    const [loading, setIsLoading] = useState<boolean>(false);

    const api = useApiService();
    const dispatch = useDispatch();

    const validationSchema = Yup.object({
        title: Yup.string().required('Title is required'),
        description: Yup.string(),
    });

    const initialValues: FormValues = {
        title: '',
        description: '',
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
        const { title, description } = data;
        console.log({ title, description });
        // try {
        //     setIsLoading(true);
        //     const result = await api.auth.signIn({ title, description });
        //     if (result) {
        //         dispatch(loginUser(result));
        //     }
        //     console.log(result);
        // } catch (error) {
        //     console.error(error);
        //     reset();
        //     dispatch(
        //         showNotification({
        //             message: (error as { response?: { data?: { message?: string } } })?.response?.data
        //                 ?.message as string,
        //             type: 'error',
        //         }),
        //     );
        // }
    });

    return (
        <FormProvider methods={methods} onSubmit={onSubmit}>
            <TextField
                id="title"
                type="text"
                label="Title"
                value={values.title}
                onChange={(event) => setValue('title', event.target.value)}
                placeholder="Provide Point Title"
            />
            <TextArea
                id="description"
                label="Description"
                value={values.description}
                onChange={(event) => setValue('description', event.target.value)}
                placeholder=""
            />
            <Button type="submit" label="Create Checkpoint" loading={isSubmitting && loading} />
        </FormProvider>
    );
};
