/** Payload to place a new order: cart items and their quantities. */
export interface PlaceOrderRequest {
    items: {
        item_id: string;
        quantity: number;
    }[];
}

/** API response after successfully placing an order. */
export interface PlaceOrderResponse {
    message: string;
    order_id: string;
    total_price: number;
}

/** Restaurant info shown on a past order card. */
export interface OrderRestaurant {
    name: string;
    image?: string;
    location: string;
}

/** Summary of a past order for the orders list view. */
export interface PastOrder {
    id: string;
    totalPrice: number;
    createdAt: string;
    restaurant: OrderRestaurant;
}

/** API response shape for a user's past orders. */
export interface PastOrdersResponse {
    orders: PastOrder[];
}

/** A single item order details */
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

/** Full order details, including all line items, for the details dialog. */
export interface OrderDetails extends PastOrder {
    orderItems: OrderItemDetail[];
}

/** Raw (snake_case) past order shape as returned by the backend. */
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

/** Raw (snake_case) API response for a user's past orders. */
export interface RawResponse {
    orders: RawOrder[];
}

/** Raw (snake_case) line item shape as returned by the backend. */
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

/** Raw (snake_case) full order details, including line items. */
export interface RawOrderDetails extends RawOrder {
    order_items: RawOrderItemDetail[];
}

/** Customer info attached to a restaurant's order (owner view). */
export interface OrderUser {
    name: string;
    email: string;
    city: string;
    state: string;
}

/** Order shape used in the restaurant owner's order history table. */
export interface RestaurantOrder {
    id: string;
    totalPrice: number;
    createdAt: string;
    user: OrderUser;
    orderItems: OrderItemDetail[];
}

/** API response shape for a restaurant's order history. */
export interface OrdersResponse {
    orders: RestaurantOrder[];
}

/** Raw (snake_case) order shape for the restaurant order history endpoint. */
interface RawStatsOrder {
    id: string;
    total_price: number;
    created_at: string;
    user: OrderUser;
    order_items: RawOrderItemDetail[];
}

/** Raw (snake_case) API response for a restaurant's order history. */
export interface RawOrdersResponse {
    orders: RawStatsOrder[];
}
