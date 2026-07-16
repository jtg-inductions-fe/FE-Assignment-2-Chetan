import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { theme } from '@theme';

const rootElement = document.getElementById('root') as HTMLElement;

import store from './store/store';

createRoot(rootElement).render(
    <StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <h1>Hello World</h1>
            </ThemeProvider>
        </Provider>
    </StrictMode>,
);
