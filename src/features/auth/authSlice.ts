import type { AuthState } from '@app-types/authTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: AuthState = {
    accessToken: localStorage.getItem('access_Token'),
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addAccessToken: (state, action: PayloadAction<string>) => {
            state.accessToken = action.payload;
        },

        removeAccessToken: (state) => {
            state.accessToken = null;
        },
    },
});

export const { addAccessToken, removeAccessToken } = authSlice.actions;

export default authSlice.reducer;
