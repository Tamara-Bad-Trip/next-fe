import { UseFormReturn, FormProvider as Form } from 'react-hook-form';

type FormProviderProps = {
    children: React.ReactNode;
    methods: UseFormReturn<any>;
    onSubmit?: () => void;
};

export const FormProvider: React.FC<FormProviderProps> = ({ children, onSubmit, methods }) => {
    return (
        <Form {...methods}>
            <form onSubmit={onSubmit}>{children}</form>
        </Form>
    );
};
