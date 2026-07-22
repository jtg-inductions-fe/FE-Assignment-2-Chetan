import { API_ROUTES } from '@constants';
import { PaginatedRestaurantsResponse } from '@containers';
import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQuery } from './baseQuery';

export const restaurantsApi = createApi({
    reducerPath: 'restaurantsApi',
    baseQuery,
    endpoints: (builder) => ({
        getRestaurants: builder.query<PaginatedRestaurantsResponse, void>({
            query: () => ({
                url: API_ROUTES.RESTAURANTS.ROOT,
            }),
        }),
    }),
});

export const { useGetRestaurantsQuery } = restaurantsApi;
