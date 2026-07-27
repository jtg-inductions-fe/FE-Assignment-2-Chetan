import { useState } from 'react';

import { Box, Container, Typography } from '@mui/material';

import restaurantPlaceholder from '@assets/images/dummyRestaurant.webp';
import { EmptyState, Loading, OrderDetailsDialog } from '@components';
import { useApiErrorHandler } from '@hooks';
import { useGetOrderDetailsQuery, useGetPastOrdersQuery } from '@services';
import { useAppSelector } from '@store';
import { OrderDetails } from '@types';

import {
    CustomOrderHeading,
    OrderCard,
    OrderInfo,
    OrderMeta,
    OrderMetaRow,
    PastOrdersWrapper,
    RestaurantImage,
    RestaurantLocation,
    RestaurantName,
    ViewDetailsButton,
} from './PastOrders.styles';

export const PastOrdersContainer = () => {
    const token = useAppSelector((state) => state.auth.accessToken);
    const { data, isLoading, error } = useGetPastOrdersQuery(undefined, { skip: !token });
    const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
    const {
        data: orderDetails,
        isLoading: isFetching,
        error: err,
    } = useGetOrderDetailsQuery(selectedOrderId ?? '', { skip: !selectedOrderId || !token });

    useApiErrorHandler(error, err);

    if (isLoading) return <Loading />;

    const orders = data?.orders ?? [];

    const handleViewDetails = (orderId: string) => {
        setSelectedOrderId(orderId);
    };

    const handleCloseDialog = () => {
        setSelectedOrderId(null);
    };

    return (
        <Container maxWidth="md">
            <PastOrdersWrapper>
                <CustomOrderHeading>{'Past Orders'}</CustomOrderHeading>

                {orders.length === 0 ? (
                    <EmptyState
                        title="No Orders Yet"
                        description={"You haven't placed any orders yet."}
                    />
                ) : (
                    orders.map((order) => (
                        <OrderCard key={order.id}>
                            <RestaurantImage
                                src={order.restaurant.image ?? restaurantPlaceholder}
                                alt={order.restaurant.name}
                            />

                            <OrderInfo>
                                <Box>
                                    <RestaurantName variant="h4">
                                        {order.restaurant.name}
                                    </RestaurantName>
                                    <RestaurantLocation>
                                        {order.restaurant.location}
                                    </RestaurantLocation>
                                </Box>

                                <OrderMetaRow>
                                    <Box>
                                        <OrderMeta>Order #{order.id.slice(0, 8)}</OrderMeta>
                                        <OrderMeta>
                                            {new Date(order.createdAt).toLocaleDateString('en-IN', {
                                                day: 'numeric',
                                                month: 'short',
                                                year: 'numeric',
                                            })}
                                        </OrderMeta>
                                    </Box>

                                    <Typography variant="h5">₹{order.totalPrice}</Typography>
                                </OrderMetaRow>

                                <ViewDetailsButton
                                    variant="outlined"
                                    size="small"
                                    onClick={() => handleViewDetails(order.id)}
                                >
                                    View Details
                                </ViewDetailsButton>
                            </OrderInfo>
                        </OrderCard>
                    ))
                )}
            </PastOrdersWrapper>

            <OrderDetailsDialog
                open={!!selectedOrderId}
                order={orderDetails as OrderDetails}
                isLoading={isFetching}
                onClose={handleCloseDialog}
            />
        </Container>
    );
};
