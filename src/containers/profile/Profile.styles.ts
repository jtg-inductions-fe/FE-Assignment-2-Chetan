import { Avatar, Box, Button, Card, Chip, Divider, styled, Typography } from '@mui/material';

import { COLORS, FONT_WEIGHT } from '@constants';

export const PageWrapper = styled(Box)(({ theme }) => ({
    minHeight: `calc(100vh - ${theme.typography.pxToRem(232)})`,
    ...theme.mixins.flexLayout('row', 'space-between', 'center'),
}));

export const ProfileGrid = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
    width: '100%',
    [theme.breakpoints.up('lg')]: {
        flexDirection: 'row',
        height: 600,
    },
}));

export const ProfileCard = styled(Card)(({ theme }) => ({
    flex: 2,
    padding: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',

    gap: theme.spacing(4),
    backgroundColor: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius * 3,
}));

export const ProfileHeader = styled(Box)(({ theme }) => ({
    ...theme.mixins.flexLayout('row', 'start', 'center'),
    gap: theme.spacing(3),
}));

export const ProfileAvatar = styled(Avatar)(({ theme }) => ({
    width: theme.typography.pxToRem(100),
    height: theme.typography.pxToRem(100),
    backgroundColor: theme.palette.primary.main,
    fontSize: theme.typography.pxToRem(42),
    fontWeight: FONT_WEIGHT.BOLD,
}));

export const RoleChip = styled(Chip)(({ theme }) => ({
    fontWeight: FONT_WEIGHT.MEDIUM,
    fontSize: theme.typography.pxToRem(10),
    padding: theme.spacing(1),
    marginTop: theme.typography.pxToRem(4),
}));

export const StyledDivider = styled(Divider)(({ theme }) => ({
    marginTop: theme.spacing(1),
}));

export const DetailsGrid = styled(Box)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(2,1fr)',
    gap: theme.spacing(4),

    [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: '1fr',
    },
}));

export const DetailLabel = styled(Typography)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    opacity: 0.55,
    fontSize: theme.typography.pxToRem(8),
    textTransform: 'uppercase',
    letterSpacing: theme.typography.pxToRem(1),
    marginBottom: theme.typography.pxToRem(6),
}));

export const BalanceCard = styled(Card)(({ theme }) => ({
    flex: 1,
    minWidth: theme.typography.pxToRem(320),
    padding: theme.spacing(6),
    ...theme.mixins.flexLayout('column', 'space-between', 'start'),
    gap: theme.spacing(4),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius * 3,
}));

export const BalanceLabel = styled(Typography)(({ theme }) => ({
    opacity: 0.9,
    fontSize: theme.typography.pxToRem(16),
    marginBottom: 10,
}));

export const BalanceAmount = styled(Typography)(({ theme }) => ({
    fontWeight: FONT_WEIGHT.BOLD,
    fontSize: theme.typography.pxToRem(32),
}));

export const PastOrdersButton = styled(Button)(({ theme }) => ({
    color: theme.palette.common.white,
    borderColor: theme.palette.common.white,
    padding: theme.spacing(3, 4),
    fontSize: theme.typography.pxToRem(12),

    '&:hover': {
        borderColor: COLORS.COMMON.LIGHT,
        fontWeight: FONT_WEIGHT.BOLD,
        padding: theme.spacing(3, 4),
    },
}));
