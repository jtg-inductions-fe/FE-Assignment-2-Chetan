import { API_ROUTES, HTTP_METHODS } from '@constants';
import { createApi } from '@reduxjs/toolkit/query/react';
import { PlaceOrderRequest, PlaceOrderResponse } from '@types';

import { baseQuery } from './baseQuery';

export const ordersApi = createApi({
    reducerPath: 'ordersApi',
    baseQuery,
    endpoints: (builder) => ({
        placeOrder: builder.mutation<
            PlaceOrderResponse,
            {
                restaurantId: string;
                body: PlaceOrderRequest;
            }
        >({
            query: ({ restaurantId, body }) => ({
                url: API_ROUTES.RESTAURANTS.PLACE_ORDER(restaurantId),
                method: HTTP_METHODS.POST,
                body,
            }),
        }),
    }),
});

export const { usePlaceOrderMutation } = ordersApi;
