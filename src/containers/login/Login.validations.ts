import { FieldValues, Path } from 'react-hook-form';

import type { FormField } from '@components';

import type { FormData } from './Login.types';

/**
 * Builds the email field config for a login/signup form, including
 * required and format validation.
 */
export const getEmailFieldValidator = <T extends FieldValues>(): FormField<T> => ({
    name: 'email' as Path<T>,
    label: 'Email',
    type: 'email',
    validation: {
        required: 'Email is required',
        pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Enter a valid email address',
        },
    },
});

/**
 * Builds the password field config for a login/signup form, including
 * required, length, and complexity validation.
 */
export const getPasswordFieldValidator = <T extends FieldValues>(): FormField<T> => ({
    name: 'password' as Path<T>,
    label: 'Password',
    type: 'password',
    validation: {
        required: 'Password is required',
        minLength: {
            value: 8,
            message: 'Password must be at least 8 characters',
        },
        pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            message:
                'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
        },
    },
});

export const loginFields: FormField<FormData>[] = [
    getEmailFieldValidator<FormData>(),
    getPasswordFieldValidator<FormData>(),
];
