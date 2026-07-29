import { Typography } from '@mui/material';

import { ClampedTypography } from '@components';
import { FONT_WEIGHT } from '@constants';
import { Panel } from '@containers';

import { CustomerRow } from './topCustomer.styles';
import type { TopCustomersListProps } from './topCustomerList.types';

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
