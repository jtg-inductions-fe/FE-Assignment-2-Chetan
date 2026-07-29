import { Box, Card, Chip, styled } from '@mui/material';

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

export const TablePanel = styled(Card)(({ theme }) => ({
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius * 3,
    backgroundColor: theme.palette.divider,
}));
