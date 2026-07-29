/** A single item in the cart, including its restaurant and quantity. */
export interface CartItem {
    id: string;
    restaurantId: string;
    name: string;
    price: number;
    quantity: number;
}

/** Shape of the cart slice in the Redux store. */
export interface CartState {
    items: CartItem[];
}
