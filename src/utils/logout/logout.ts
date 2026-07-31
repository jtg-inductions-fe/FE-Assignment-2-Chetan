import { analyticsApi, authApi, menuItemsApi, ordersApi, restaurantsApi } from '@services';
import { clearCart, removeAuth } from '@slices';
import type { AppDispatch } from '@store';

export const logout = (dispatch: AppDispatch) => {
    localStorage.removeItem('accessToken');

    dispatch(removeAuth());
    dispatch(clearCart());

    dispatch(authApi.util.resetApiState());
    dispatch(ordersApi.util.resetApiState());
    dispatch(restaurantsApi.util.resetApiState());
    dispatch(menuItemsApi.util.resetApiState());
    dispatch(analyticsApi.util.resetApiState());
};
