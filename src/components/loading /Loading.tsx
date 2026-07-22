import { CircularProgress } from '@mui/material';

import { LoadingContainer } from './Loading.styles';

export const Loading = () => (
    <LoadingContainer>
        <CircularProgress size={60} thickness={4.5} color="primary" aria-label="Loading…" />
    </LoadingContainer>
);
