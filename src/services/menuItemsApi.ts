import { EditItemFormData, ItemFormData } from '@components';
import { API_ROUTES } from '@constants';
import { ItemDetails, ItemsResponse } from '@containers';
import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQuery } from './baseQuery';

export const menuItemsApi = createApi({
    reducerPath: 'MenuItemsApi',
    baseQuery,
    tagTypes: ['MenuItems'],
    endpoints: (builder) => ({
        getMenuItems: builder.query<ItemsResponse, string>({
            query: (id) => ({
                url: API_ROUTES.RESTAURANTS.GET_MENU(id),
            }),
            providesTags: ['MenuItems'],
        }),

        updateItem: builder.mutation<
            { message: string },
            {
                restaurantId: string;
                itemId: string;
                formData: EditItemFormData;
            }
        >({
            query: ({ restaurantId, itemId, formData }) => ({
                url: API_ROUTES.RESTAURANTS.MENU_ITEMS.UPDATE(restaurantId, itemId),
                method: 'PATCH',
                body: formData,
            }),
            invalidatesTags: ['MenuItems'],
        }),

        createItem: builder.mutation<
            ItemDetails,
            {
                restaurantId: string;
                formData: ItemFormData;
            }
        >({
            query: ({ restaurantId, formData }) => ({
                url: API_ROUTES.RESTAURANTS.MENU_ITEMS.CREATE(restaurantId),
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['MenuItems'],
        }),

        deleteItem: builder.mutation<{ message: string }, { restaurantId: string; itemId: string }>(
            {
                query: ({ restaurantId, itemId }) => ({
                    url: `/restaurants/${restaurantId}/items/${itemId}`,
                    method: 'DELETE',
                }),
                invalidatesTags: ['MenuItems'],
            },
        ),
    }),
});

export const {
    useGetMenuItemsQuery,
    useUpdateItemMutation,
    useCreateItemMutation,
    useDeleteItemMutation,
} = menuItemsApi;
