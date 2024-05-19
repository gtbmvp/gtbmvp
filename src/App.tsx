import React from 'react';
import './App.css';

import { ThemeProvider } from './app/ThemeProvider';
import InputModal from './features/InputModal/InputModal';
import Layout from './widgets/Layout/Layout';

function App() {
    return (
        <ThemeProvider>
            <Layout>
                <InputModal />
            </Layout>
        </ThemeProvider>
    );
}

export default App;
