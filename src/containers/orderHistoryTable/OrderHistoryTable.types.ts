import { RestaurantOrder } from '@types';

/** Props for the table listing all orders placed at a restaurant. */
export interface OrderHistoryTableProps {
    orders: RestaurantOrder[];
}
