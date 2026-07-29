import { useDispatch, useSelector } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';
import { authApi, menuItemsApi, ordersApi, restaurantsApi } from '@services';

import { rootReducer } from './rootReducer';

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(authApi.middleware)
            .concat(restaurantsApi.middleware)
            .concat(menuItemsApi.middleware)
            .concat(ordersApi.middleware),
});

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();

store.subscribe(() => {
    localStorage.setItem('cart', JSON.stringify(store.getState().cart.items));
});
