import { API_ROUTES } from '@constants';
import { CustomerStat, ItemStat, RawCustomerStat, RawItemStat } from '@containers';
import { createApi } from '@reduxjs/toolkit/query/react';
import { OrdersResponse, RawOrdersResponse } from '@types';

import { baseQuery } from './baseQuery';

export const analyticsApi = createApi({
    reducerPath: 'analyticsApi',
    baseQuery,
    endpoints: (builder) => ({
        getItemStats: builder.query<ItemStat[], string>({
            query: (restaurantId) => ({
                url: API_ROUTES.RESTAURANTS.OWNER.GET_ITEM_STATS(restaurantId),
            }),
            transformResponse: (response: RawItemStat[]): ItemStat[] =>
                response.map((stat) => ({
                    itemName: stat.item__name,
                    totalOrderedQuantity: stat.total_ordered_quantity,
                })),
        }),

        getTopCustomers: builder.query<CustomerStat[], string>({
            query: (restaurantId) => ({
                url: API_ROUTES.RESTAURANTS.OWNER.GET_TOP_CUSTOMERS(restaurantId),
            }),
            transformResponse: (response: RawCustomerStat[]): CustomerStat[] =>
                response.map((customer) => ({
                    customerName: customer.user__name,
                    totalOrders: customer.total_order,
                })),
        }),

        getRestaurantOrders: builder.query<OrdersResponse, string>({
            query: (restaurantId) => ({
                url: API_ROUTES.RESTAURANTS.OWNER.GET_RESTAURANT_ORDERS(restaurantId),
            }),
            transformResponse: (response: RawOrdersResponse): OrdersResponse => ({
                orders: response.orders.map((order) => ({
                    id: order.id,
                    totalPrice: order.total_price,
                    createdAt: order.created_at,
                    user: order.user,
                    orderItems: order.order_items.map((oi) => ({
                        id: oi.id,
                        itemPrice: oi.item_price,
                        quantity: oi.quantity,
                        item: oi.item,
                    })),
                })),
            }),
        }),
    }),
});

export const { useGetItemStatsQuery, useGetTopCustomersQuery, useGetRestaurantOrdersQuery } =
    analyticsApi;
