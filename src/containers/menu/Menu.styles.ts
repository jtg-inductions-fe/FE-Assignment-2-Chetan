import { CurrencyRupee } from '@mui/icons-material';
import { Button, styled } from '@mui/material';

export const StyledItemCardButton = styled(Button)(({ theme }) => ({
    paddingInline: theme.typography.pxToRem(30),
    fontWeight: theme.typography.pxToRem(700),
    color: theme.palette.success.dark,
    border: `1px solid ${theme.palette.text.secondary}`,
    borderRadius: theme.shape.borderRadius * 2,
    width: '80%',
    height: theme.typography.pxToRem(36),
}));

export const MicroIcon = styled(CurrencyRupee)(({ theme }) => ({
    width: theme.typography.pxToRem(14),
    height: theme.typography.pxToRem(14),
}));
