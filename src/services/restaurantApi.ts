import { API_ROUTES } from '@constants';
import { RestaurantsResponse } from '@containers';
import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQuery } from './baseQuery';

export const restaurantsApi = createApi({
    reducerPath: 'restaurantsApi',
    baseQuery,
    endpoints: (builder) => ({
        getRestaurants: builder.query<RestaurantsResponse, string>({
            query: (search = '') => ({
                url: API_ROUTES.RESTAURANTS.ROOT,
                params: {
                    search,
                },
            }),
        }),
    }),
});

export const { useGetRestaurantsQuery } = restaurantsApi;
