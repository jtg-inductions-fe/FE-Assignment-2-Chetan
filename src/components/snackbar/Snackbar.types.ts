import { AlertColor } from '@mui/material';

/** Props for the snackbar state */
export interface SnackbarState {
    open: boolean;
    message: string;
    severity: AlertColor;
    autoHideDuration: number;
}
