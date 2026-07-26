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
        validation: { required: 'Category is required' },
    },
    {
        name: 'cuisine',
        label: 'Cuisine',
        type: 'text',
        validation: { required: 'Cuisine is required' },
    },
    priceField,
    quantityField,
];
