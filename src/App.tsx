import React from 'react';
import './App.css';

import { ThemeProvider } from './app/ThemeProvider';
import InputModal from './features/InputModal/InputModal';
import Layout from './widgets/Layout/Layout';

import { LocalizationInitiator } from './app/Localization/LocalizationInitiator';

function App() {
    return (
        <>
            <LocalizationInitiator />
            <ThemeProvider>
                <Layout>
                    <InputModal />
                </Layout>
            </ThemeProvider>
        </>
    );
}

export default App;
