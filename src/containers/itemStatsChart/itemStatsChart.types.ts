/** Aggregated stat: how many times a menu item was ordered. */
export interface ItemStat {
    itemName: string;
    totalOrderedQuantity: number;
}

/** Props for the chart displaying most-ordered items. */
export interface ItemStatsChartProps {
    data: ItemStat[];
}
