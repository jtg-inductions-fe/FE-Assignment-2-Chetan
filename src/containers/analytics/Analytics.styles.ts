import { Box, Card, Chip, styled, Typography } from '@mui/material';

export const PageWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
    paddingBlock: theme.spacing(3, 4),
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

export const CustomerName = styled(Typography)({
    flex: 1,
});

export const OrderCountText = styled(Typography)(({ theme }) => ({
    opacity: 0.7,
    fontSize: theme.typography.pxToRem(13),
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
}));

export const StyledChipBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.typography.pxToRem(1),
    maxWidth: theme.typography.pxToRem(760),
}));
