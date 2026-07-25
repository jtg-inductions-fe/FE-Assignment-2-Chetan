export interface PlaceOrderRequest {
    items: {
        item_id: string;
        quantity: number;
    }[];
}

export interface PlaceOrderResponse {
    message: string;
    order_id: string;
    total_price: number;
}
