import { useParams } from 'react-router-dom';

import { Typography } from '@mui/material';

import { EmptyState, Loading } from '@components';
import {
    AnalyticsPageWrapper,
    ItemStatsChart,
    OrderHistoryTable,
    PanelsRow,
    StyledHeadingBox,
    TopCustomersList,
} from '@containers';
import { useApiErrorHandler } from '@hooks';
import {
    useGetItemStatsQuery,
    useGetRestaurantOrdersQuery,
    useGetTopCustomersQuery,
} from '@services';
import { useAppSelector } from '@store';

export const Analytics = () => {
    const { restaurantId } = useParams();
    const token = useAppSelector((state) => state.auth.accessToken);

    const {
        data: itemStats,
        isLoading: isLoadingStats,
        error: itemStatsError,
    } = useGetItemStatsQuery(restaurantId ?? '', { skip: !token });
    const {
        data: topCustomers,
        isLoading: isLoadingCustomers,
        error: topCustomersError,
    } = useGetTopCustomersQuery(restaurantId ?? '', { skip: !token });
    const {
        data: ordersData,
        isLoading: isLoadingOrders,
        error: ordersError,
    } = useGetRestaurantOrdersQuery(restaurantId ?? '', { skip: !token });

    useApiErrorHandler(itemStatsError, topCustomersError, ordersError);

    if (isLoadingStats || isLoadingCustomers || isLoadingOrders) return <Loading />;

    const orders = ordersData?.orders ?? [];

    return (
        <AnalyticsPageWrapper>
            <StyledHeadingBox>
                <Typography>Analytics</Typography>
            </StyledHeadingBox>

            <PanelsRow>
                {itemStats && itemStats.length > 0 ? (
                    <ItemStatsChart data={itemStats} />
                ) : (
                    <EmptyState title="No Data" description="No items ordered yet." />
                )}

                {topCustomers && topCustomers.length > 0 ? (
                    <TopCustomersList data={topCustomers.slice(0, 10)} />
                ) : (
                    <EmptyState title="No Data" description="No customers yet." />
                )}
            </PanelsRow>

            {orders.length === 0 ? (
                <EmptyState title="No Orders" description="No orders placed yet." />
            ) : (
                <OrderHistoryTable orders={orders} />
            )}
        </AnalyticsPageWrapper>
    );
};
