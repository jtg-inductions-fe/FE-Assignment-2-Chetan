import { authApi } from '@api/authApi';
import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './rootReducer';

const store = configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
