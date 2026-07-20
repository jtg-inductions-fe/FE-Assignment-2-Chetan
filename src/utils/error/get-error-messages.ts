import { ApiErrorResponse } from '@app-types/api-errors.types';
import { ERROR_MESSAGES, HTTP_STATUS_CODES } from '@constants';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export const getErrorMessage = (error: FetchBaseQueryError | SerializedError): string => {
    if ('status' in error) {
        if (error.data && typeof error.data === 'object' && 'detail' in error.data) {
            return (error.data as ApiErrorResponse).detail;
        }

        switch (error.status) {
            case HTTP_STATUS_CODES.BAD_REQUEST:
                return ERROR_MESSAGES[HTTP_STATUS_CODES.BAD_REQUEST];

            case HTTP_STATUS_CODES.UNAUTHORIZED:
                return ERROR_MESSAGES[HTTP_STATUS_CODES.UNAUTHORIZED];

            case HTTP_STATUS_CODES.FORBIDDEN:
                return ERROR_MESSAGES[HTTP_STATUS_CODES.FORBIDDEN];

            case HTTP_STATUS_CODES.NOT_FOUND:
                return ERROR_MESSAGES[HTTP_STATUS_CODES.NOT_FOUND];

            case HTTP_STATUS_CODES.CONFLICT:
                return ERROR_MESSAGES[HTTP_STATUS_CODES.CONFLICT];

            case HTTP_STATUS_CODES.REQUEST_TIMEOUT:
                return ERROR_MESSAGES[HTTP_STATUS_CODES.REQUEST_TIMEOUT];

            case HTTP_STATUS_CODES.SERVER_ERROR:
                return ERROR_MESSAGES[HTTP_STATUS_CODES.SERVER_ERROR];

            case HTTP_STATUS_CODES.GATEWAY_TIMEOUT:
                return ERROR_MESSAGES[HTTP_STATUS_CODES.GATEWAY_TIMEOUT];

            default:
                return ERROR_MESSAGES.UNKNOWN_ERROR;
        }
    }

    return error.message || ERROR_MESSAGES.UNKNOWN_ERROR;
};
