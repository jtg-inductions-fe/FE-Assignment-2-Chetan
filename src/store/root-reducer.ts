import { authApi } from 'services/auth-api';

import snackbarReducer from '@components/snackbar';
import authReducer from '@containers/auth';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
    auth: authReducer,
    snackbar: snackbarReducer,
    [authApi.reducerPath]: authApi.reducer,
});
