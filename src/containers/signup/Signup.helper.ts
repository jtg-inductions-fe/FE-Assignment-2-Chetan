import type { FormField } from '@components';
import { PREFERENCE, ROLE } from '@constants';

import type { User } from './Signup.types';
import { getEmailFieldValidator, getPasswordFieldValidator } from '../login';

export const signupFields: FormField<User>[] = [
    getEmailFieldValidator<User>(),
    getPasswordFieldValidator<User>(),

    {
        name: 'name',
        label: 'Name',
        validation: {
            required: 'name is required',

            minLength: {
                value: 5,
                message: 'name must be at least 5 character',
            },
            maxLength: {
                value: 70,
                message: 'name must be at most 70 character',
            },
            pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: 'Name cannot contain numbers or special characters',
            },
        },
    },

    {
        name: 'city',
        label: 'City',
        validation: {
            required: 'City name is required',
            minLength: {
                value: 2,
                message: 'City name must be at least 2 characters',
            },
            maxLength: {
                value: 50,
                message: 'City name must be at most 50 characters',
            },
            pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: 'city cannot contain numbers or special characters',
            },
        },
    },

    {
        name: 'state',
        label: 'State',
        validation: {
            required: 'State is required',
            minLength: {
                value: 2,
                message: 'State must be at least 2 characters',
            },
            maxLength: {
                value: 50,
                message: 'State must be at most 50 characters',
            },
            pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: 'State cannot contain numbers or special characters',
            },
        },
    },

    {
        name: 'zipcode',
        label: 'Zip Code',
        validation: {
            required: 'Zip code is required',
            pattern: {
                value: /^[0-9]{5,6}$/,
                message: 'Enter a valid 5 or 6 digit numeric zip code',
            },
        },
    },

    {
        name: 'balance',
        label: 'Balance',
        type: 'number',
        validation: {
            required: 'Balance is required',
            validate: (value: string) => {
                const num = parseFloat(value);
                if (isNaN(num) || num < 0) {
                    return 'Balance cannot be negative';
                }
                return true;
            },
        },
    },

    {
        name: 'prefrence',
        label: 'Preference',
        type: 'radio',
        options: [
            { value: PREFERENCE.VEG, label: 'Veg' },
            { value: PREFERENCE.NON_VEG, label: 'Non veg' },
        ],
        validation: {
            required: 'Please select a Preference',
        },
    },

    {
        name: 'role',
        label: 'User Role',
        type: 'radio',
        options: [
            { value: ROLE.USER, label: 'User' },
            { value: ROLE.ADMIN, label: 'Admin' },
        ],
        validation: {
            required: 'Please select a user role',
        },
    },
];
