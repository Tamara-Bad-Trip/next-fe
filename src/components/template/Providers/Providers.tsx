'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/redux/store';

//--------------------------------------------------------

interface ProvidersProps {
    children: ReactNode;
}

//--------------------------------------------------------

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}{' '}
            </PersistGate>
        </Provider>
    );
};
