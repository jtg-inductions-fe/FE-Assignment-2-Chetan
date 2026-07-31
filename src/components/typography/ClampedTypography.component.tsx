import { Tooltip } from '@mui/material';

import { StyledTypography } from './ClampedTypography.styles';
import { ClampedTypographyProps } from './ClampedTypography.types';

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
