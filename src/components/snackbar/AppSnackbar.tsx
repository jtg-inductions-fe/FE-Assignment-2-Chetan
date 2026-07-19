import { Alert, Snackbar } from '@mui/material';

import { hideSnackbar } from '@features/snackbar/snackbarSlice';
import { useAppDispatch, useAppSelector } from '@store/hooks';

const AppSnackbar = () => {
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
                vertical: 'top',
                horizontal: 'center',
            }}
        >
            <Alert
                sx={{
                    position: 'relative',
                    top: '10vh',
                }}
                onClose={handleClose}
                severity={severity}
                variant="filled"
            >
                {message}
            </Alert>
        </Snackbar>
    );
};

export default AppSnackbar;
