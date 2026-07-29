import { Box, styled } from '@mui/material';

import { FONT_WEIGHT } from '@constants';

export const AnalyticsPageWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
    paddingBlock: theme.spacing(3, 4),
}));

export const StyledHeadingBox = styled(Box)(({ theme }) => ({
    '.MuiTypography-root': {
        textAlign: 'start',
        fontSize: theme.typography.pxToRem(44),
        marginBlock: theme.typography.pxToRem(34),
        fontWeight: FONT_WEIGHT.BOLD,
        lineHeight: 1,
    },
}));

export const PanelsRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),

    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
    },
}));

export const CustomerRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    padding: theme.spacing(1.5, 0),
    borderBottom: `1px solid ${theme.palette.divider}`,
    '&:last-of-type': {
        borderBottom: 'none',
    },
}));
