import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Box, Container } from '@mui/material';

import restaurantPlaceholder from '@assets/images/dummyRestaurant.webp';
import { EmptyState, Loading, OrderDetailsDialog } from '@components';
import { HTTP_STATUS_CODES, ROUTES } from '@constants';
import { useGetOrderDetailsQuery, useGetPastOrdersQuery } from '@services';
import { showSnackbar } from '@slices';
import { useAppDispatch, useAppSelector } from '@store';
import { OrderDetails } from '@types';
import { getErrorMessage } from '@utils';

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
    TotalAmount,
    ViewDetailsButton,
} from './PastOrders.styles';

export const PastOrdersContainer = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const token = useAppSelector((state) => state.auth.accessToken);
    const { data, isLoading, error } = useGetPastOrdersQuery(undefined, { skip: !token });
    const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
    const {
        data: orderDetails,
        isLoading: isFetching,
        error: err,
    } = useGetOrderDetailsQuery(selectedOrderId ?? '', { skip: !selectedOrderId });

    useEffect(() => {
        const currentError = error || err;
        if (currentError) {
            dispatch(
                showSnackbar({
                    message: getErrorMessage(currentError),
                    severity: 'error',
                }),
            );

            const isAuthError =
                'status' in currentError && currentError.status === HTTP_STATUS_CODES.UNAUTHORIZED;

            if (isAuthError) {
                localStorage.removeItem('accessToken');
                void navigate(ROUTES.AUTH.LOGIN, { replace: true });
            }
        }
    }, [error, dispatch, err, navigate]);

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

                                    <TotalAmount>₹{order.totalPrice}</TotalAmount>
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
