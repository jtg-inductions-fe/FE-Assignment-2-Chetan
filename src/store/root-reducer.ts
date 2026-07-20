import { authApi } from 'services/auth-api';

import snackbarReducer from '@components/snackbar';
import authReducer from '@containers/auth';
import { combineReducers } from '@reduxjs/toolkit';
import { authApi } from '@services';
import { authReducer, snackbarReducer } from '@slices';

export const rootReducer = combineReducers({
    auth: authReducer,
    snackbar: snackbarReducer,
    [authApi.reducerPath]: authApi.reducer,
});
