import { authApi } from '@api/authApi';
import authReducer from '@features/auth/authSlice';
import snackbarReducer from '@features/snackbar/snackbarSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { authApi, menuItemsApi, ordersApi, restaurantsApi } from '@services';
import { authReducer, cartReducer, snackbarReducer } from '@slices';

export const rootReducer = combineReducers({
    auth: authReducer,
    snackbar: snackbarReducer,
    cart: cartReducer,
    [authApi.reducerPath]: authApi.reducer,
    [restaurantsApi.reducerPath]: restaurantsApi.reducer,
    [menuItemsApi.reducerPath]: menuItemsApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
});
