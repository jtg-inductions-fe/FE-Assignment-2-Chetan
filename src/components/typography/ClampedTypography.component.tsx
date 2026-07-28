import { styled, Tooltip, Typography } from '@mui/material';

import { ClampedTypographyProps } from './ClampedTypography.styles';

const StyledTypography = styled(Typography)<ClampedTypographyProps>(({ theme, lines = 1 }) => ({
    ...theme.mixins.lineClamp(lines),
}));

export const ClampedTypography = ({
    lines = 1,
    title,
    children,
    ...props
}: ClampedTypographyProps) => {
    const tooltipText = title ?? (typeof children === 'string' ? children : '');

    return (
        <Tooltip title={tooltipText} arrow>
            <StyledTypography lines={lines} {...props}>
                {children}
            </StyledTypography>
        </Tooltip>
    );
};
