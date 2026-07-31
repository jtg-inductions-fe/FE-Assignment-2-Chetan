import { useDispatch, useSelector } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';
import { analyticsApi, authApi, menuItemsApi, ordersApi, restaurantsApi } from '@services';

import { rootReducer } from './rootReducer';

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(authApi.middleware)
            .concat(restaurantsApi.middleware)
            .concat(menuItemsApi.middleware)
            .concat(ordersApi.middleware)
            .concat(analyticsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();

store.subscribe(() => {
    localStorage.setItem('cart', JSON.stringify(store.getState().cart.items));
});
