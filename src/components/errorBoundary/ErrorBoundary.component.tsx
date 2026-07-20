import { Component } from 'react';

import { Button, Stack } from '@mui/material';

import error500 from '@assets/image/error500.webp';

import { ErrorBoundaryProps, ErrorBoundaryState } from './ErrorBoundary.types';
import { ErrorImage } from './ErrorImage.styles';

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state: ErrorBoundaryState = {
        hasError: false,
    };

    static getDerivedStateFromError(): ErrorBoundaryState {
        return {
            hasError: true,
        };
    }

    render() {
        if (this.state.hasError) {
            return (
                <Stack justifyContent="center" alignItems="center" sx={{ minHeight: '80vh', p: 2 }}>
                    <ErrorImage src={error500} alt="Something went wrong" />

                    <Button variant="contained" onClick={() => this.setState({ hasError: false })}>
                        Try Again
                    </Button>
                </Stack>
            );
        }

        return this.props.children;
    }
}
