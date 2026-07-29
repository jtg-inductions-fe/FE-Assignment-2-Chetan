import { combineReducers } from '@reduxjs/toolkit';
import { authApi, restaurantsApi } from '@services';
import { authReducer, snackbarReducer } from '@slices';

export const rootReducer = combineReducers({
    auth: authReducer,
    snackbar: snackbarReducer,
    [authApi.reducerPath]: authApi.reducer,
    [restaurantsApi.reducerPath]: restaurantsApi.reducer,
});
