import { API_ROUTES } from '@constants';
import { ItemsResponse } from '@containers';
import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQuery } from './baseQuery';

export const menuItemsApi = createApi({
    reducerPath: 'MenuItemsApi',
    baseQuery,
    endpoints: (builder) => ({
        getMenuItems: builder.query<ItemsResponse, string>({
            query: (id) => ({
                url: API_ROUTES.RESTAURANTS.GET_MENU(id),
            }),
        }),
    }),
});

export const { useGetMenuItemsQuery } = menuItemsApi;
