import { useParams } from 'react-router-dom';

import { EmptyState, Loading } from '@components';
import { CustomHeading } from '@containers';
import {
    useGetItemStatsQuery,
    useGetRestaurantOrdersQuery,
    useGetTopCustomersQuery,
} from '@services';

import { PageWrapper, PanelsRow } from './Analytics.styles';
import { ItemStatsChart } from './ItemStatsChart';
import { OrderHistoryTable } from './OrderHistoryTable';
import { TopCustomersList } from './TopCustomersList';

export const AnalyticsContainer = () => {
    const { restaurantId } = useParams();

    const { data: itemStats, isLoading: isLoadingStats } = useGetItemStatsQuery(restaurantId ?? '');
    const { data: topCustomers, isLoading: isLoadingCustomers } = useGetTopCustomersQuery(
        restaurantId ?? '',
    );
    const { data: ordersData, isLoading: isLoadingOrders } = useGetRestaurantOrdersQuery(
        restaurantId ?? '',
    );

    if (isLoadingStats || isLoadingCustomers || isLoadingOrders) return <Loading />;

    const orders = ordersData?.orders ?? [];

    return (
        <PageWrapper>
            <CustomHeading>Analytics</CustomHeading>

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
        </PageWrapper>
    );
};
