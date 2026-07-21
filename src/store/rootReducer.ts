import { combineReducers } from '@reduxjs/toolkit';
import { authApi } from '@services';
import { authReducer, snackbarReducer } from '@slices';

export const rootReducer = combineReducers({
    auth: authReducer,
    snackbar: snackbarReducer,
    [authApi.reducerPath]: authApi.reducer,
});
