/** Props for a generic confirm/cancel dialog. */
export interface ConfirmationDialogProps {
    open: boolean;
    title: string;
    description: string;
    confirmText: string;
    cancelText?: string;
    onConfirm: () => void;
    onCancel: () => void;
}
