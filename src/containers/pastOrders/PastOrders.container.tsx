import { useState } from 'react';

import { Box, Container, Typography } from '@mui/material';

import restaurantPlaceholder from '@assets/images/dummyRestaurant.webp';
import { ClampedTypography, EmptyState, Loading, OrderDetailsDialog } from '@components';
import { FONT_WEIGHT } from '@constants';
import { useApiErrorHandler } from '@hooks';
import { useGetOrderDetailsQuery, useGetPastOrdersQuery } from '@services';
import { useAppSelector } from '@store';
import { theme } from '@theme';
import { OrderDetails } from '@types';

import {
    CustomOrderHeadingBox,
    OrderCard,
    OrderInfo,
    OrderMetaRow,
    PastOrdersWrapper,
    RestaurantImage,
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
                <CustomOrderHeadingBox>
                    <Typography
                        fontSize={theme.typography.pxToRem(44)}
                        fontWeight={FONT_WEIGHT.BOLD}
                    >
                        {'Past Orders'}
                    </Typography>
                </CustomOrderHeadingBox>

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
                                    <ClampedTypography
                                        title={order.restaurant.name}
                                        marginBottom={theme.typography.pxToRem(6)}
                                        variant="h4"
                                    >
                                        {order.restaurant.name}
                                    </ClampedTypography>
                                    <ClampedTypography
                                        variant="body2"
                                        color="text.secondary"
                                        title={order.restaurant.location}
                                    >
                                        {order.restaurant.location}
                                    </ClampedTypography>
                                </Box>

                                <OrderMetaRow>
                                    <Box>
                                        <Typography
                                            color="text.secondary"
                                            lineHeight={1.5}
                                            fontSize={theme.typography.pxToRem(10)}
                                        >
                                            Order #{order.id.slice(0, 8)}
                                        </Typography>
                                        <Typography
                                            color="text.secondary"
                                            lineHeight={1.5}
                                            fontSize={theme.typography.pxToRem(10)}
                                        >
                                            {new Date(order.createdAt).toLocaleDateString('en-IN', {
                                                day: 'numeric',
                                                month: 'short',
                                                year: 'numeric',
                                            })}
                                        </Typography>
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
