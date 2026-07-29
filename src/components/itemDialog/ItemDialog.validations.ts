import type { FormField } from '@components';

import type { ItemFormData } from './ItemDialog.types';

const priceField: FormField<ItemFormData> = {
    name: 'price',
    label: 'Price',
    type: 'number',
    validation: {
        required: 'Price is required',
        min: { value: 0, message: 'Price cannot be negative' },
    },
};

const quantityField: FormField<ItemFormData> = {
    name: 'quantity',
    label: 'Quantity',
    type: 'number',
    validation: {
        required: 'Quantity is required',
        min: { value: 1, message: 'Quantity must be at least 1' },
    },
};

export const editItemFields: FormField<ItemFormData>[] = [priceField, quantityField];

export const addItemFields: FormField<ItemFormData>[] = [
    {
        name: 'name',
        label: 'Name',
        type: 'text',
        validation: { required: 'Name is required' },
    },
    {
        name: 'category',
        label: 'Category',
        type: 'text',
        validation: {
            required: 'Category is required',
            minLength: {
                value: 2,
                message: 'Category must be at least 2 characters',
            },
            maxLength: {
                value: 50,
                message: 'Category must be at most 50 characters',
            },
            pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: 'Category cannot contain numbers or special characters',
            },
        },
    },
    {
        name: 'cuisine',
        label: 'Cuisine',
        type: 'text',
        validation: {
            required: 'Cuisine is required',
            minLength: {
                value: 2,
                message: 'Cuisine must be at least 2 characters',
            },
            maxLength: {
                value: 50,
                message: 'Cuisine must be at most 50 characters',
            },
            pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: 'Cuisine cannot contain numbers or special characters',
            },
        },
    },
    priceField,
    quantityField,
];
