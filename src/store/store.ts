import { useDispatch, useSelector } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '@services';

import { rootReducer } from './rootReducer';

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();
