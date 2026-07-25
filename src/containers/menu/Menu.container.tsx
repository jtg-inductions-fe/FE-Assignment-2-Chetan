import { useState } from 'react';

import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { Star } from '@mui/icons-material';
import { Box } from '@mui/material';

import img from '@assets/images/dummyRestaurant.webp';
import {
    BottomActionBar,
    Card,
    ConfirmationDialog,
    EmptyState,
    Loading,
    QuantitySelector,
} from '@components';
import { ROUTES } from '@constants';
import { RestaurantBasicDetails } from '@containers';
import { useGetMenuItemsQuery } from '@services';
import { addItem, clearCart, decrementItem, incrementItem, showSnackbar } from '@slices';
import { useAppDispatch, useAppSelector } from '@store';
import { getErrorMessage } from '@utils';

import {
    CustomHeading,
    MicroIcon,
    StyledContainer,
    StyledImage,
    StyledItemCardButton,
} from './Menu.styles';
import { ItemDetails } from './Menu.types';

export const MenuContainer = () => {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const [openDialog, setOpenDialog] = useState(false);
    const [selectedItem, setSelectedItem] = useState<ItemDetails | null>(null);

    const token = localStorage.getItem('accessToken');
    const cartItems = useAppSelector((state) => state.cart.items);
    const restaurant = location.state as RestaurantBasicDetails;

    const { restaurantId } = useParams();
    const { data, isLoading, error } = useGetMenuItemsQuery(restaurantId ?? '');

    if (isLoading) return <Loading />;

    if (error) {
        dispatch(
            showSnackbar({
                message: getErrorMessage(error),
                severity: 'error',
            }),
        );
    }

    const menuItems = data?.items ?? [];
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    const handleAddToCart = (item: ItemDetails) => {
        if (cartItems.length === 0 || cartItems[0].restaurantId === restaurant.id) {
            dispatch(
                addItem({
                    id: item.id,
                    name: item.name,
                    restaurantId: restaurant.id,
                    price: item.price,
                    quantity: 1,
                }),
            );
            return;
        }

        setSelectedItem(item);
        setOpenDialog(true);
    };

    const handleReplace = () => {
        if (!selectedItem) return;

        dispatch(clearCart());

        dispatch(
            addItem({
                id: selectedItem.id,
                name: selectedItem.name,
                restaurantId: restaurant.id,
                price: selectedItem.price,
                quantity: 1,
            }),
        );

        setOpenDialog(false);
        setSelectedItem(null);
    };

    const handleCancel = () => {
        setOpenDialog(false);
        setSelectedItem(null);
    };
    return (
        <StyledContainer maxWidth="md">
            <Box>
                <CustomHeading>{restaurant?.name || 'Restaurant Name'}</CustomHeading>

                <StyledImage
                    src={restaurant?.image || img}
                    alt={restaurant?.name || 'Restaurant Image'}
                />
            </Box>

            {menuItems.length === 0 ? (
                <EmptyState
                    title="No Menu Items Found"
                    description="There are no Items available at the moment."
                />
            ) : (
                menuItems.map((item) => {
                    const cartItem = cartItems.find((cItem) => cItem.id === item.id);
                    const quantity = cartItem?.quantity ?? 0;

                    return (
                        <Card
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            orientation="horizontal"
                            details={[
                                {
                                    icon: <MicroIcon />,
                                    value: item.price,
                                },
                                { value: item.category },
                                { value: item.cuisine },
                                {
                                    value: `Available: ${item.quantity}`,
                                },
                                {
                                    icon: <Star color="success" />,
                                    value: `${item.rating}`,
                                },
                            ]}
                            action={
                                token &&
                                (quantity === 0 ? (
                                    <StyledItemCardButton
                                        variant="outlined"
                                        onClick={() => handleAddToCart(item)}
                                    >
                                        ADD
                                    </StyledItemCardButton>
                                ) : (
                                    <QuantitySelector
                                        quantity={quantity}
                                        onIncrement={() => dispatch(incrementItem(item.id))}
                                        onDecrement={() => dispatch(decrementItem(item.id))}
                                    />
                                ))
                            }
                        />
                    );
                })
            )}

            {totalItems > 0 && (
                <BottomActionBar
                    leftText={`${totalItems} Item${totalItems > 1 ? 's' : ''} Added`}
                    buttonText="VIEW CART"
                    onClick={() => void navigate(ROUTES.CART, { state: restaurant })}
                />
            )}

            <ConfirmationDialog
                open={openDialog}
                title="Replace Cart?"
                description="Your cart contains items from another restaurant. Do you want to clear your current cart and add this item?"
                confirmText="Replace"
                onConfirm={handleReplace}
                onCancel={handleCancel}
            />
        </StyledContainer>
    );
};
