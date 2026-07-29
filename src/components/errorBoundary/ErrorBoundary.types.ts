import { ReactNode } from 'react';

/** Props for the app-wide error boundary. */
export interface ErrorBoundaryProps {
    children: ReactNode;
}

/** Internal state tracking whether the error boundary has caught an error. */
export interface ErrorBoundaryState {
    hasError: boolean;
}
