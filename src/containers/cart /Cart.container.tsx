import { useLocation, useNavigate } from 'react-router-dom';

import { Box, Button, Divider, Stack, Typography } from '@mui/material';

import img from '@assets/images/dummyRestaurant.webp';
import { ClampedTypography, EmptyState, Loading } from '@components';
import { ROUTES } from '@constants';
import { RestaurantBasicDetails } from '@containers';
import { useApiErrorHandler } from '@hooks';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { authApi, useGetUserQuery, usePlaceOrderMutation } from '@services';
import { clearCart, showSnackbar } from '@slices';
import { useAppDispatch, useAppSelector } from '@store';
import { theme } from '@theme';
import { getErrorMessage } from '@utils';

import {
    StyledBillContainer,
    StyledCart,
    StyledCartContainer,
    StyledCartItem,
    StyledPageContainer,
    StyledPlaceOrderButton,
    StyledPriceContainer,
    StyledRestaurantImage,
} from './Cart.styles';

export const CartContainer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const items = useAppSelector((state) => state.cart.items);
    const { id, accessToken } = useAppSelector((state) => state.auth);
    const [placeOrder, { isLoading, error }] = usePlaceOrderMutation();
    const {
        data: user,
        isLoading: isUserLoading,
        error: userError,
    } = useGetUserQuery(id as string, { skip: !accessToken });

    const restaurant = (location.state as RestaurantBasicDetails) ?? {};

    useApiErrorHandler(error, userError);

    if (isLoading || isUserLoading) return <Loading />;

    if (items.length == 0) {
        return (
            <EmptyState
                title="Your Cart is Empty"
                description="Looks like you haven't added anything to your cart yet."
            />
        );
    }

    const totalAmount = items.reduce(
        (total: number, item: { price: number; quantity: number }) =>
            total + item.price * item.quantity,
        0,
    );

    /** Validates balance, places the order, clears the cart, and redirects to past orders. **/
    const handlePlaceOrder = async () => {
        if (!user) return;

        if (parseFloat(user.balance) < totalAmount) {
            dispatch(
                showSnackbar({
                    message: 'Insufficient balance.',
                    severity: 'error',
                }),
            );
            return;
        }

        const payload = {
            items: items.map((item) => ({
                item_id: item.id,
                quantity: item.quantity,
            })),
        };

        try {
            const response = await placeOrder({
                restaurantId: restaurant.id,
                body: payload,
            }).unwrap();

            dispatch(clearCart());
            dispatch(authApi.util.invalidateTags(['User']));
            dispatch(
                showSnackbar({
                    message: `${response.message} Total Price: ${response.total_price}`,
                    severity: 'success',
                }),
            );

            void navigate(ROUTES.PAST_ORDERS);
        } catch (err) {
            dispatch(
                showSnackbar({
                    message: getErrorMessage(err as FetchBaseQueryError | SerializedError),
                    severity: 'error',
                }),
            );
        }
    };

    return (
        <Box marginBlock={5}>
            <StyledPageContainer>
                <StyledCart>
                    <ClampedTypography title={restaurant.name}>{restaurant.name}</ClampedTypography>
                    <StyledRestaurantImage src={img} alt="Restaurant Display" />
                </StyledCart>
                <StyledCartContainer>
                    {items?.map((item, index) => (
                        <Box key={item.id}>
                            <StyledCartItem>
                                <StyledPriceContainer>
                                    <ClampedTypography
                                        sx={{ ...theme.mixins.lineClamp(1) }}
                                        variant="h6"
                                        title={item.name}
                                    >
                                        {item.name}
                                    </ClampedTypography>
                                    <Typography fontWeight={600}>
                                        ₹{item.price * item.quantity}
                                    </Typography>
                                </StyledPriceContainer>

                                <Typography color="text.secondary">
                                    Quantity: {item.quantity}
                                </Typography>
                            </StyledCartItem>

                            {index !== items.length - 1 && <Divider />}
                        </Box>
                    ))}
                </StyledCartContainer>

                <StyledBillContainer elevation={2}>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography variant="h6">Total Amount</Typography>

                        <Typography variant="h6" fontWeight={700}>
                            ₹{totalAmount}
                        </Typography>
                    </Stack>
                </StyledBillContainer>

                <StyledPlaceOrderButton>
                    <Button
                        variant="contained"
                        onClick={() => {
                            void handlePlaceOrder();
                        }}
                        fullWidth
                    >
                        PLACE ORDER
                    </Button>
                </StyledPlaceOrderButton>
            </StyledPageContainer>
        </Box>
    );
};
