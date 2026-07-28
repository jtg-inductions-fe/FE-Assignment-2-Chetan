import { CurrencyRupee } from '@mui/icons-material';
import { Box, Button, Container, styled } from '@mui/material';

import { FONT_WEIGHT } from '@constants';

export const StyledItemCardButton = styled(Button)(({ theme }) => ({
    paddingInline: theme.typography.pxToRem(30),
    fontWeight: FONT_WEIGHT.BOLD,
    color: theme.palette.success.dark,
    border: `1px solid ${theme.palette.text.secondary}`,
    borderRadius: theme.shape.borderRadius * 2,
    width: '80%',
    height: theme.typography.pxToRem(36),
}));

export const StyledCardIcon = styled(Button)(({ theme }) => ({
    border: `1px solid ${theme.palette.text.secondary}`,
    borderRadius: theme.shape.borderRadius * 2,
    height: theme.typography.pxToRem(36),
}));

export const MicroIcon = styled(CurrencyRupee)(({ theme }) => ({
    width: theme.typography.pxToRem(14),
    height: theme.typography.pxToRem(14),
}));

export const StyledImage = styled('img')(({ theme }) => ({
    marginBlock: theme.typography.pxToRem(5),
    objectFit: 'cover',
    width: '100%',
    height: theme.typography.pxToRem(250),
    borderRadius: theme.shape.borderRadius * 2,
}));

export const StyledContainer = styled(Container)(({ theme }) => ({
    paddingBottom: theme.spacing(12),
}));

export const StyledMenuTopBox = styled(Box)(({ theme }) => ({
    ...theme.mixins.flexLayout('column', 'space-between', 'center'),

    [theme.breakpoints.up('sm')]: {
        ...theme.mixins.flexLayout('row', 'space-between', 'center'),
    },
    '.MuiTypography-root': {
        textAlign: 'start',
        fontSize: theme.typography.pxToRem(44),
        marginBlock: theme.typography.pxToRem(34),
        fontWeight: FONT_WEIGHT.BOLD,
        lineHeight: 1,
    },
}));
