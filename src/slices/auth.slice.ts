import type { AuthState } from '@containers';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: AuthState = {
    accessToken: localStorage.getItem('accessToken'),
    id: null,
    role: null,
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
