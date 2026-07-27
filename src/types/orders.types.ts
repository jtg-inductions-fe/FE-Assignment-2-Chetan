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

export interface OrderRestaurant {
    name: string;
    image?: string;
    location: string;
}

export interface PastOrder {
    id: string;
    totalPrice: number;
    createdAt: string;
    restaurant: OrderRestaurant;
}

export interface PastOrdersResponse {
    orders: PastOrder[];
}

export interface OrderItemDetail {
    id: string;
    itemPrice: number;
    quantity: number;
    item: {
        name: string;
        category: string;
        cuisine: string;
    };
}

export interface OrderDetails extends PastOrder {
    orderItems: OrderItemDetail[];
}

export interface RawOrder {
    id: string;
    total_price: number;
    created_at: string;
    restaurant: {
        name: string;
        image?: string;
        location: string;
    };
}

export interface RawResponse {
    orders: RawOrder[];
}

interface RawOrderItemDetail {
    id: string;
    item_price: number;
    quantity: number;
    item: {
        name: string;
        category: string;
        cuisine: string;
    };
}

export interface RawOrderDetails extends RawOrder {
    order_items: RawOrderItemDetail[];
}

export interface OrderUser {
    name: string;
    email: string;
    city: string;
    state: string;
}

export interface RestaurantOrder {
    id: string;
    totalPrice: number;
    createdAt: string;
    user: OrderUser;
    orderItems: OrderItemDetail[];
}

export interface OrdersResponse {
    orders: RestaurantOrder[];
}

interface RawStatsOrder {
    id: string;
    total_price: number;
    created_at: string;
    user: OrderUser;
    order_items: RawOrderItemDetail[];
}

export interface RawOrdersResponse {
    orders: RawStatsOrder[];
}
