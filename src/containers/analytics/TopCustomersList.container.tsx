import { Typography } from '@mui/material';

import { ClampedTypography } from '@components';
import { FONT_WEIGHT } from '@constants';

import { CustomerRow, Panel } from './Analytics.styles';
import type { TopCustomersListProps } from './Analytics.types';

export const TopCustomersList = ({ data }: TopCustomersListProps) => (
    <Panel>
        <Typography variant="h4">Top Customers</Typography>

        {data.map((customer, index) => (
            <CustomerRow key={index}>
                <ClampedTypography
                    flex={1}
                    title={customer.customerName}
                    fontWeight={FONT_WEIGHT.REGULAR}
                    variant="h5"
                >
                    {customer.customerName}
                </ClampedTypography>
                <Typography color="text.secondary">{`${customer.totalOrders} orders`}</Typography>
            </CustomerRow>
        ))}
    </Panel>
);
