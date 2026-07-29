import { DialogContent } from '@mui/material';

import {
    StyledCancelButton,
    StyledConfirmButton,
    StyledDescription,
    StyledDialog,
    StyledDialogActions,
    StyledDialogTitle,
} from './ConfirmationDialog.styles';
import { ConfirmationDialogProps } from './ConfirmationDialog.types';

export const ConfirmationDialog = ({
    open,
    title,
    description,
    confirmText,
    cancelText = 'Cancel',
    onConfirm,
    onCancel,
}: ConfirmationDialogProps) => (
    <StyledDialog open={open} onClose={onCancel} aria-labelledby="confirmation-dialog-title">
        <StyledDialogTitle id="confirmation-dialog-title">{title}</StyledDialogTitle>

        <DialogContent>
            <StyledDescription>{description}</StyledDescription>
        </DialogContent>

        <StyledDialogActions>
            <StyledCancelButton variant="outlined" onClick={onCancel}>
                {cancelText}
            </StyledCancelButton>

            <StyledConfirmButton variant="contained" onClick={onConfirm}>
                {confirmText}
            </StyledConfirmButton>
        </StyledDialogActions>
    </StyledDialog>
);
