import { Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';

import { COLORS } from '@constants';

import { Panel } from './ItemStatsChart.styles';
import type { ItemStatsChartProps } from './itemStatsChart.types';

export const ItemStatsChart = ({ data }: ItemStatsChartProps) => {
    const itemNames = data.map((stat) => stat.itemName);
    const quantities = data.map((stat) => stat.totalOrderedQuantity);

    return (
        <Panel>
            <Typography variant="h4">Most Ordered Items</Typography>

            <BarChart
                layout="horizontal"
                yAxis={[{ data: itemNames }]}
                series={[
                    {
                        data: quantities,
                        label: 'Orders',
                        color: COLORS.PRIMARY.MAIN,
                    },
                ]}
                height={300}
            />
        </Panel>
    );
};
