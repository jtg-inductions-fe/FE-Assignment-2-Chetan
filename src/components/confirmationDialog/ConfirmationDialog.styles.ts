import { Button, Dialog, DialogActions, DialogTitle, styled } from '@mui/material';

import { FONT_WEIGHT } from '@constants';

export const StyledDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: theme.shape.borderRadius * 2,
        width: theme.typography.pxToRem(420),
        padding: theme.spacing(1),
        backgroundColor: theme.palette.common.white,
    },
}));

export const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
    fontWeight: FONT_WEIGHT.MEDIUM,
    textAlign: 'center',
    paddingBottom: theme.spacing(1),
}));

export const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
    justifyContent: 'space-between',
    padding: theme.spacing(2),
}));

export const StyledCancelButton = styled(Button)(({ theme }) => ({
    minWidth: theme.typography.pxToRem(120),
}));

export const StyledConfirmButton = styled(Button)(({ theme }) => ({
    minWidth: theme.typography.pxToRem(120),
}));
