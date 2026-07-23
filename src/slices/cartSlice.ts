import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { CartItem, CartState } from '@types';

const initialState: CartState = {
    items: JSON.parse(localStorage.getItem('cart_guest') ?? '[]') as CartItem[],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push(action.payload);
            }
        },

        incrementItem: (state, action: PayloadAction<string>) => {
            const item = state.items.find((i) => i.id === action.payload);

            if (item) {
                item.quantity += 1;
            }
        },

        decrementItem: (state, action: PayloadAction<string>) => {
            const item = state.items.find((i) => i.id === action.payload);

            if (!item) return;

            if (item.quantity === 1) {
                state.items = state.items.filter((i) => i.id !== action.payload);
            } else {
                item.quantity -= 1;
            }
        },

        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addItem, incrementItem, decrementItem, clearCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
