import type { FormData, LoginResponse, User, UserResponse } from '@app-types/authTypes';
import { API_ROUTES, HTTP_METHODS } from '@constants';
import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQuery } from './baseQuery';

export const authApi = createApi({
    reducerPath: 'authApi',

    baseQuery,
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, FormData>({
            query: (Credentials) => {
                const formData = new FormData();
                formData.append('username', Credentials.email);
                formData.append('password', Credentials.password);

                return {
                    url: API_ROUTES.AUTH.LOGIN,
                    method: HTTP_METHODS.POST,
                    body: formData,
                };
            },
        }),

        logout: builder.mutation<void, void>({
            query: () => ({
                url: API_ROUTES.AUTH.LOGOUT,
                method: HTTP_METHODS.GET,
            }),
        }),

        signup: builder.mutation<UserResponse, User>({
            query: (Credential) => ({
                url: API_ROUTES.USERS.CREATE,
                method: HTTP_METHODS.POST,
                body: Credential,
            }),
        }),
    }),
});

export const { useLoginMutation, useLogoutMutation, useSignupMutation } = authApi;
