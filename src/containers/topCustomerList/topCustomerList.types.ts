/** Aggregated stat: a customer and their total order count. */
export interface CustomerStat {
    customerName: string;
    totalOrders: number;
}

/** Props for the list displaying top customers by order count. */
export interface TopCustomersListProps {
    data: CustomerStat[];
}

/** Raw (snake_case) item stat shape as returned by the backend. */
export interface RawItemStat {
    item__name: string;
    total_ordered_quantity: number;
}

/** Raw (snake_case) customer stat shape as returned by the backend. */
export interface RawCustomerStat {
    user__name: string;
    total_order: number;
}
