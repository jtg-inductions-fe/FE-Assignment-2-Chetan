import { authApi } from 'services/auth-api';

import snackbarReducer from '@components/snackbar';
import authReducer from '@containers/auth';
import { combineReducers } from '@reduxjs/toolkit';
import { authApi, menuItemsApi, restaurantsApi } from '@services';
import { authReducer, cartReducer, snackbarReducer } from '@slices';

export const rootReducer = combineReducers({
    auth: authReducer,
    snackbar: snackbarReducer,
    cart: cartReducer,
    [authApi.reducerPath]: authApi.reducer,
    [restaurantsApi.reducerPath]: restaurantsApi.reducer,
    [menuItemsApi.reducerPath]: menuItemsApi.reducer,
});
