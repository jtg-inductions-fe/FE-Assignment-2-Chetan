import { API_ROUTES, HTTP_METHODS } from '@constants';
import { createApi } from '@reduxjs/toolkit/query/react';
import {
    OrderDetails,
    PastOrdersResponse,
    PlaceOrderRequest,
    PlaceOrderResponse,
    RawOrderDetails,
    RawResponse,
} from '@types';

import { baseQuery } from './baseQuery';

export const ordersApi = createApi({
    reducerPath: 'ordersApi',
    baseQuery,
    tagTypes: ['Orders'],
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
            invalidatesTags: ['Orders'],
        }),

        getPastOrders: builder.query<PastOrdersResponse, void>({
            query: () => ({
                url: API_ROUTES.ORDERS.ROOT,
            }),
            providesTags: ['Orders'],
            transformResponse: (response: RawResponse): PastOrdersResponse => ({
                orders: response.orders.map((order) => ({
                    id: order.id,
                    totalPrice: order.total_price,
                    createdAt: order.created_at,
                    restaurant: order.restaurant,
                })),
            }),
        }),

        getOrderDetails: builder.query<OrderDetails, string>({
            query: (orderId) => ({
                url: API_ROUTES.ORDERS.GET_DETAILS(orderId),
            }),

            transformResponse: (response: RawOrderDetails): OrderDetails => ({
                id: response.id,
                totalPrice: response.total_price,
                createdAt: response.created_at,
                restaurant: response.restaurant,
                orderItems: response.order_items.map((oi) => ({
                    id: oi.id,
                    itemPrice: oi.item_price,
                    quantity: oi.quantity,
                    item: oi.item,
                })),
            }),
        }),
    }),
});

export const { usePlaceOrderMutation, useGetPastOrdersQuery, useGetOrderDetailsQuery } = ordersApi;
