import { AlertColor } from '@mui/material';

export type ShowSnackbarPayload = {
    message: string;
    severity: AlertColor;
    autoHideDuration?: number;
};
