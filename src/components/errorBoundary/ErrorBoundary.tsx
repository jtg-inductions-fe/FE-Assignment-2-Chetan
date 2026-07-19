import { Component, ReactNode } from 'react';

import { Box, Button, Stack } from '@mui/material';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
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
                    <Box
                        component="img"
                        src="/image/error500.png"
                        alt="Something went wrong "
                        sx={{
                            width: '100%',
                            maxWidth: 940,
                        }}
                    />

                    <Button variant="contained" onClick={() => this.setState({ hasError: false })}>
                        Try Again
                    </Button>
                </Stack>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
