import { HTTP_STATUS_CODES } from '@constants';

export const ERROR_MESSAGES = {
    [HTTP_STATUS_CODES.BAD_REQUEST]:
        'The request is invalid. Please check your input and try again.',

    [HTTP_STATUS_CODES.UNAUTHORIZED]: 'Your session has expired. Please log in again.',

    [HTTP_STATUS_CODES.FORBIDDEN]: 'You do not have permission to perform this action.',

    [HTTP_STATUS_CODES.NOT_FOUND]: 'The requested resource could not be found.',

    [HTTP_STATUS_CODES.SERVER_ERROR]: 'Something went wrong on our end. Please try again later.',

    [HTTP_STATUS_CODES.GATEWAY_TIMEOUT]:
        'The server is taking too long to respond. Please try again later.',

    [HTTP_STATUS_CODES.REQUEST_TIMEOUT]: 'The request timed out. Please try again.',

    [HTTP_STATUS_CODES.CONFLICT]: 'A conflict occurred. Please try again.',

    UNKNOWN_ERROR: 'Something went wrong. Please try again.',
} as const;
