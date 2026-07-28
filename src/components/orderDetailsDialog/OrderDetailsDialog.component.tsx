import {
    Box,
    Button,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    Typography,
} from '@mui/material';

import restaurantPlaceholder from '@assets/images/dummyRestaurant.webp';
import { ClampedTypography, Loading, OrderDetailsDialogProps, StyledDialog } from '@components';
import { theme } from '@theme';

import {
    ItemRow,
    OrderDetailsRow,
    RestaurantImage,
    RestaurantRow,
    TotalRow,
} from './OrderDetailsDialog.styles';

export const OrderDetailsDialog = ({
    open,
    order,
    isLoading,
    onClose,
}: OrderDetailsDialogProps) => (
    <StyledDialog open={open} onClose={onClose}>
        <DialogTitle variant="h4">Order Details</DialogTitle>

        <DialogContent>
            {isLoading || !order ? (
                <Loading />
            ) : (
                <>
                    <RestaurantRow>
                        <RestaurantImage
                            src={order.restaurant.image ?? restaurantPlaceholder}
                            alt={order.restaurant.name}
                        />
                        <Box>
                            <ClampedTypography title={order.restaurant.name} variant="h5">
                                {order.restaurant.name}
                            </ClampedTypography>
                            <ClampedTypography
                                color="text.secondary"
                                variant="body2"
                                title={order.restaurant.location}
                            >
                                {order.restaurant.location}
                            </ClampedTypography>
                        </Box>
                    </RestaurantRow>

                    <OrderDetailsRow>
                        <Typography>Order #{order.id.slice(0, 8)}</Typography>
                        <Typography>
                            {new Date(order.createdAt).toLocaleDateString('en-IN', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                            })}
                        </Typography>
                    </OrderDetailsRow>

                    <Divider />

                    {order.orderItems.map((oi) => (
                        <ItemRow key={oi.id}>
                            <Box>
                                <ClampedTypography
                                    title={oi.item.name}
                                    color="text.secondary"
                                    variant="body1"
                                >
                                    {oi.item.name}
                                </ClampedTypography>
                                <ClampedTypography
                                    fontSize={theme.typography.pxToRem(8)}
                                    title={oi.item.category}
                                    color={theme.palette.text.secondary}
                                >
                                    {oi.item.category} . Qty: {oi.quantity}
                                </ClampedTypography>
                            </Box>
                            <Typography variant="subtitle1">
                                ₹{oi.itemPrice * oi.quantity}
                            </Typography>
                        </ItemRow>
                    ))}
                    <Divider />

                    <TotalRow>
                        <Typography variant="h6">Total</Typography>
                        <Typography variant="h5">₹{order.totalPrice}</Typography>
                    </TotalRow>
                </>
            )}
        </DialogContent>

        <DialogActions>
            <Button onClick={onClose} color="primary">
                Close
            </Button>
        </DialogActions>
    </StyledDialog>
);
