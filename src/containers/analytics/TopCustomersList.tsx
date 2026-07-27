import { Typography } from '@mui/material';

import { FONT_WEIGHT } from '@constants';

import { CustomerName, CustomerRow, OrderCountText, Panel } from './Analytics.styles';
import type { TopCustomersListProps } from './Analytics.types';

export const TopCustomersList = ({ data }: TopCustomersListProps) => (
    <Panel>
        <Typography variant="h4">Top Customers</Typography>

        {data.map((customer, index) => (
            <CustomerRow key={index}>
                <CustomerName fontWeight={FONT_WEIGHT.REGULAR} variant="h5">
                    {customer.customerName}
                </CustomerName>
                <OrderCountText>{customer.totalOrders} orders</OrderCountText>
            </CustomerRow>
        ))}
    </Panel>
);
