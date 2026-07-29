import { Box, Button, Card, styled, Typography } from '@mui/material';

import { FONT_WEIGHT } from '@constants';

export const PastOrdersWrapper = styled(Box)(({ theme }) => ({
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(4),
}));

export const OrderCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(2.5),
    backgroundColor: theme.palette.common.white,
    borderRadius: 0,
    display: 'flex',
    gap: theme.spacing(2.5),

    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
    },
}));

export const RestaurantImage = styled('img')(({ theme }) => ({
    width: theme.typography.pxToRem(96),
    height: theme.typography.pxToRem(96),
    borderRadius: theme.shape.borderRadius * 2,
    objectFit: 'cover',
}));

export const OrderInfo = styled(Box)(({ theme }) => ({
    flex: 1,
    ...theme.mixins.flexLayout('column', 'space-between', ''),
}));

export const RestaurantName = styled(Typography)(({ theme }) => ({
    fontWeight: FONT_WEIGHT.BOLD,
    fonstSize: theme.typography.pxToRem(44),
    marginBottom: theme.typography.pxToRem(6),
}));

export const RestaurantLocation = styled(Typography)(({ theme }) => ({
    opacity: 0.6,
    fontSize: theme.typography.pxToRem(12),
}));

export const OrderMetaRow = styled(Box)(({ theme }) => ({
    ...theme.mixins.flexLayout('row', 'space-between', 'center'),
    marginTop: theme.spacing(1.5),
}));

export const OrderMeta = styled(Typography)(({ theme }) => ({
    opacity: 0.55,
    fontSize: theme.typography.pxToRem(10),
    lineHeight: 1.5,
}));

export const ViewDetailsButton = styled(Button)(({ theme }) => ({
    alignSelf: 'flex-end',
    marginTop: theme.typography.pxToRem(8),
}));

export const CustomOrderHeading = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.pxToRem(44),
    marginBlock: theme.typography.pxToRem(34),
    marginLeft: theme.typography.pxToRem(25),
    fontWeight: FONT_WEIGHT.BOLD,
    lineHeight: 1,
}));
