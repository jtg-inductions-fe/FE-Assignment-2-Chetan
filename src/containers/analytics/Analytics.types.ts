import { RestaurantOrder } from '@types';

export interface ItemStat {
    itemName: string;
    totalOrderedQuantity: number;
}

export interface CustomerStat {
    customerName: string;
    totalOrders: number;
}

export interface ItemStatsChartProps {
    data: ItemStat[];
}

export interface OrderHistoryTableProps {
    orders: RestaurantOrder[];
}

export interface TopCustomersListProps {
    data: CustomerStat[];
}

export interface RawItemStat {
    item__name: string;
    total_ordered_quantity: number;
}

export interface RawCustomerStat {
    user__name: string;
    total_order: number;
}
