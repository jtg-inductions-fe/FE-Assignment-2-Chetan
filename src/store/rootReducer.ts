import { authApi } from 'services/authApi';

import { combineReducers } from '@reduxjs/toolkit';
import { authReducer, snackbarReducer } from '@slices';
export const rootReducer = combineReducers({
    auth: authReducer,
    snackbar: snackbarReducer,
    [authApi.reducerPath]: authApi.reducer,
});
