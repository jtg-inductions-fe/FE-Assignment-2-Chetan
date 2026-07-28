import { Box, Card, Chip, styled } from '@mui/material';

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

export const Panel = styled(Card)(({ theme }) => ({
    flex: 1,
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    borderRadius: theme.shape.borderRadius * 3,
    backgroundColor: theme.palette.divider,
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

export const TablePanel = styled(Card)(({ theme }) => ({
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius * 3,
    backgroundColor: theme.palette.divider,
}));

export const StyledChip = styled(Chip)(({ theme }) => ({
    marginInline: theme.spacing(1),
    backgroundColor: theme.palette.divider,
    marginBlock: theme.typography.pxToRem(2),
    ...theme.mixins.lineClamp(1),
}));

export const StyledChipBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.typography.pxToRem(1),
    maxWidth: theme.typography.pxToRem(760),
}));
