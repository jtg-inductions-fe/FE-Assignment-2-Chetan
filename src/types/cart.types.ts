export interface CartItem {
    id: string;
    restaurantId: string;
    name: string;
    price: number;
    quantity: number;
}

export interface CartState {
    items: CartItem[];
}
