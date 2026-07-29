import { Alert, Snackbar } from '@mui/material';

import { hideSnackbar } from '@slices';
import { useAppDispatch, useAppSelector } from '@store';

export const AppSnackbar = () => {
    const dispatch = useAppDispatch();

    const { open, message, severity, autoHideDuration } = useAppSelector((state) => state.snackbar);

    const handleClose = () => {
        dispatch(hideSnackbar());
    };

    return (
        <Snackbar
            open={open}
            autoHideDuration={autoHideDuration}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
        >
            <Alert onClose={handleClose} severity={severity} variant="filled">
                {message}
            </Alert>
        </Snackbar>
    );
};
