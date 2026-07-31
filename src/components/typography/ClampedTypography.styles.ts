import { styled, Typography } from '@mui/material';

import { ClampedTypographyProps } from './ClampedTypography.types';

export const StyledTypography = styled(Typography)<ClampedTypographyProps>(
    ({ theme, lines = 1 }) => ({
        ...theme.mixins.lineClamp(lines),
    }),
);
