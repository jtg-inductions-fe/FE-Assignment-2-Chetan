import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { AppSnackbar, ErrorBoundary } from '@components';
import { AppRoutes } from '@routes';
import store from '@store';
import { theme } from '@theme';

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
    <StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <BrowserRouter>
                    <ErrorBoundary>
                        <AppRoutes />
                        <AppSnackbar />
                    </ErrorBoundary>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    </StrictMode>,
);
