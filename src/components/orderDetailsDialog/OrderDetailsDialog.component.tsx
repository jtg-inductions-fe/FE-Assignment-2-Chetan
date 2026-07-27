import { Box, Button, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';

import restaurantPlaceholder from '@assets/images/dummyRestaurant.webp';
import { Loading, OrderDetailsDialogProps, StyledDialog } from '@components';

import {
    ItemRow,
    OrderDetailsRow,
    RestaurantImage,
    RestaurantRow,
    StyledDivider,
    StyledInfo,
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
                            <Typography variant="h5">{order.restaurant.name}</Typography>
                            <StyledInfo>{order.restaurant.location}</StyledInfo>
                        </Box>
                    </RestaurantRow>

                    <OrderDetailsRow>
                        <StyledInfo>Order #{order.id.slice(0, 8)}</StyledInfo>
                        <StyledInfo>
                            {new Date(order.createdAt).toLocaleDateString('en-IN', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                            })}
                        </StyledInfo>
                    </OrderDetailsRow>

                    <StyledDivider />

                    {order.orderItems.map((oi) => (
                        <ItemRow key={oi.id}>
                            <Box>
                                <Typography variant="body1">{oi.item.name}</Typography>
                                <StyledInfo>
                                    {oi.item.category} . Qty: {oi.quantity}
                                </StyledInfo>
                            </Box>
                            <Typography variant="body1">₹{oi.itemPrice * oi.quantity}</Typography>
                        </ItemRow>
                    ))}
                    <StyledDivider />

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
