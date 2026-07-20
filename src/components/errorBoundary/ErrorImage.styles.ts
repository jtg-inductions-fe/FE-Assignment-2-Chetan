import { styled } from '@mui/material/styles';

import { theme } from '@theme';

export const ErrorImage = styled('img')(() => ({
    width: '100%',
    maxWidth: theme.typography.pxToRem(940),
}));
