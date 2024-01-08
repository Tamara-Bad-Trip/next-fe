'use client';

import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField } from '@/components/common/TextField/TextField';
import { Button } from '@/components/common/Button/Button';
import { RightPartAuth } from '@/components/common/RightPartAuth/RightPartAuth';
import styles from './sign-in.module.scss';

const content = {
    title: `Welcome back`,
    subTitle: `Welcome back! Please enter your details.`,
    link: { title: `Don't have an account?`, link: `Sign up` },
};

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 6 characters').required('Password is required'),
});

const initialValues = {
    email: '',
    password: '',
};

export const SignInView = () => {
    const onSubmit = (values: any) => {
        console.log(values);
    };

    return (
        <section className={styles.section}>
            <div className={styles['left-part']}>
                <h1 className={styles.title}>{content.title}</h1>
                <h3 className={styles['sub-title']}>{content.subTitle}</h3>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    <Form className={styles.form}>
                        <div>
                            <TextField id="email" type="text" label="Email" placeholder="Enter your email" />
                            <ErrorMessage name="email" component="div" />
                        </div>

                        <div>
                            <TextField id="password" type="password" label="Password" placeholder="******" />
                            <ErrorMessage name="password" component="div" />
                        </div>

                        <Button type="submit" label="Sign In" />
                    </Form>
                </Formik>
            </div>
            <RightPartAuth />
        </section>
    );
};
