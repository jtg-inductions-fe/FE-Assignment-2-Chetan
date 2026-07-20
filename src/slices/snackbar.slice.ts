import { AlertColor } from '@mui/material';

import { SnackbarState } from '@components';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: SnackbarState = {
    open: false,
    message: '',
    severity: 'success',
    autoHideDuration: 3000,
};

type ShowSnackbarPayload = {
    message: string;
    severity: AlertColor;
    autoHideDuration?: number;
};

const snackbarSlice = createSlice({
    name: 'snackbar',
    initialState,
    reducers: {
        showSnackbar: (state, action: PayloadAction<ShowSnackbarPayload>) => {
            state.open = true;
            state.message = action.payload.message;
            state.severity = action.payload.severity;
            state.autoHideDuration = action.payload.autoHideDuration ?? 3000;
        },

        hideSnackbar: (state) => {
            state.open = false;
        },
    },
});

export const { showSnackbar, hideSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;
