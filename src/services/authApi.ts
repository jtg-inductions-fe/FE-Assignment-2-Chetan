import { API_ROUTES, HTTP_METHODS } from '@constants';
import type { FormData, LoginResponse, User, UserResponse } from '@containers';
import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQuery } from './baseQuery';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery,
    tagTypes: ['User'],
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

            transformResponse: (response: {
                access_token: string;
                token_type: string;
            }): LoginResponse => ({
                accessToken: response.access_token,
                tokenType: response.token_type,
            }),
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

        getUser: builder.query<UserResponse, string>({
            query: (userId) => ({
                url: API_ROUTES.USERS.GET(userId),
                method: HTTP_METHODS.GET,
            }),
            providesTags: ['User'],
        }),
    }),
});

export const { useLoginMutation, useLogoutMutation, useSignupMutation, useGetUserQuery } = authApi;
