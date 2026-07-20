import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { AuthState } from './auth.types';

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
