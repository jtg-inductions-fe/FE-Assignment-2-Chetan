import { decodeToken } from 'utils/jwt/jwt';

import type { AuthState } from '@containers';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const token = localStorage.getItem('accessToken');

let id: string | null = null;
let role: string | null = null;

if (token) {
    const payload = decodeToken(token);
    id = payload.id;
    role = payload.role;
}

const initialState: AuthState = {
    accessToken: token,
    id,
    role,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addAuth: (
            state,
            action: PayloadAction<{
                accessToken: string;
                id: string;
                role: string;
            }>,
        ) => {
            state.accessToken = action.payload.accessToken;
            state.id = action.payload.id;
            state.role = action.payload.role;
        },

        removeAuth: (state) => {
            state.accessToken = null;
            state.id = null;
            state.role = null;
        },
    },
});

export const { addAuth, removeAuth } = authSlice.actions;

export const authReducer = authSlice.reducer;
