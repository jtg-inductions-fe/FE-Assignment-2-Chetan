import { Component } from 'react';

import { Button, Stack } from '@mui/material';

import error500 from '@assets/images/error500.webp';
import { theme } from '@theme';

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
                <Stack
                    justifyContent="center"
                    alignItems="center"
                    minHeight="80vh"
                    p={theme.typography.pxToRem(8)}
                >
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
