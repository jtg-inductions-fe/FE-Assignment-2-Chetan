import { AlertColor } from '@mui/material';

/** Payload for dispatching a snackbar notification. */
export type ShowSnackbarPayload = {
    message: string;
    severity: AlertColor;
    autoHideDuration?: number;
};
