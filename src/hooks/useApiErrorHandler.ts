import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { HTTP_STATUS_CODES, ROUTES } from '@constants';
import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { showSnackbar } from '@slices';
import { useAppDispatch } from '@store';
import { getErrorMessage } from '@utils';

type ApiError = FetchBaseQueryError | SerializedError | undefined;

/**
 * Shows a snackbar for the first truthy API error, and redirects to
 * login (clearing the token) if it's a 401 Unauthorized.
 */

export const useApiErrorHandler = (...errors: ApiError[]) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const currentError = errors.find((err) => !!err);

    useEffect(() => {
        if (!currentError) return;

        dispatch(
            showSnackbar({
                message: getErrorMessage(currentError),
                severity: 'error',
            }),
        );

        const isAuthError =
            'status' in currentError && currentError.status === HTTP_STATUS_CODES.UNAUTHORIZED;

        if (isAuthError) {
            localStorage.removeItem('accessToken');
            void navigate(ROUTES.AUTH.LOGIN, { replace: true });
        }
    }, [currentError, dispatch, navigate]);
};
