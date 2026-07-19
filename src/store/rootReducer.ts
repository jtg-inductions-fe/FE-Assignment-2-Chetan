import { authApi } from '@api/authApi';
import authReducer from '@features/auth/authSlice';
import snackbarReducer from '@features/snackbar/snackbarSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { authApi } from '@services';
import { authReducer, snackbarReducer } from '@slices';

export const rootReducer = combineReducers({
    auth: authReducer,
    snackbar: snackbarReducer,
    [authApi.reducerPath]: authApi.reducer,
});
