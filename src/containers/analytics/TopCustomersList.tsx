import { Typography } from '@mui/material';

import { CustomerName, CustomerRow, OrderCountText, Panel } from './Analytics.styles';
import type { TopCustomersListProps } from './Analytics.types';

export const TopCustomersList = ({ data }: TopCustomersListProps) => (
    <Panel>
        <Typography variant="h4">Top Customers</Typography>

        {data.map((customer, index) => (
            <CustomerRow key={index}>
                <CustomerName variant="h5">{customer.customerName}</CustomerName>
                <OrderCountText>{customer.totalOrders} orders</OrderCountText>
            </CustomerRow>
        ))}
    </Panel>
);
