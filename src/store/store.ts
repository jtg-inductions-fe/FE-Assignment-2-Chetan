import { useDispatch, useSelector } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';
import { authApi, menuItemsApi, restaurantsApi } from '@services';

import { rootReducer } from './rootReducer';

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(authApi.middleware)
            .concat(restaurantsApi.middleware)
            .concat(menuItemsApi.middleware),
});

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();

store.subscribe(() => {
    const state = store.getState();
    const userId = state.auth.id;
    const key = userId ? `cart_${userId}` : 'cart_guest';
    localStorage.setItem(key, JSON.stringify(store.getState().cart.items));
});
