import { useState } from 'react';

import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { Add as AddIcon, BarChart, Delete, Edit, Star } from '@mui/icons-material';
import { Box, Button, Stack } from '@mui/material';

import dishImage from '@assets/images/dummyItems.webp';
import restaurantImg from '@assets/images/dummyRestaurant.webp';
import {
    BottomActionBar,
    Card,
    ClampedTypography,
    ConfirmationDialog,
    EmptyState,
    ItemDialog,
    ItemFormData,
    Loading,
    QuantitySelector,
} from '@components';
import { ROLE, ROUTES } from '@constants';
import { RestaurantBasicDetails } from '@containers';
import { useApiErrorHandler } from '@hooks';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import {
    useCreateItemMutation,
    useDeleteItemMutation,
    useGetMenuItemsQuery,
    useUpdateItemMutation,
} from '@services';
import { addItem, clearCart, decrementItem, incrementItem, showSnackbar } from '@slices';
import { useAppDispatch, useAppSelector } from '@store';
import { getErrorMessage } from '@utils';

import {
    MicroIcon,
    StyledCardIcon,
    StyledContainer,
    StyledImage,
    StyledItemCardButton,
    StyledMenuTopBox,
} from './Menu.styles';
import { ItemDetails } from './Menu.types';

export const MenuContainer = () => {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const [updateItem, { isLoading: isUpdating }] = useUpdateItemMutation();
    const [createItem, { isLoading: isCreating }] = useCreateItemMutation();
    const [deleteItem, { isLoading: isDeleting }] = useDeleteItemMutation();

    const role = useAppSelector((state) => state.auth.role);
    const cartItems = useAppSelector((state) => state.cart.items);

    const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);
    const [selectedItem, setSelectedItem] = useState<ItemDetails | null>(null);

    const [openItemDialog, setOpenItemDialog] = useState(false);
    const [dialogMode, setDialogMode] = useState<'add' | 'edit'>('add');

    const token = localStorage.getItem('accessToken');
    const restaurant = location.state as RestaurantBasicDetails;

    const { restaurantId } = useParams();
    const { data, isLoading, error } = useGetMenuItemsQuery(restaurantId ?? '');

    useApiErrorHandler(error);

    if (isLoading || isCreating || isDeleting || isUpdating) return <Loading />;

    const menuItems = data?.items ?? [];
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    /**
     * Adds an item directly to the cart. and item must be belong to same restaurant.
     */
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
        setOpenConfirmationDialog(true);
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

        setOpenConfirmationDialog(false);
        setSelectedItem(null);
    };

    const handleCancel = () => {
        setOpenConfirmationDialog(false);
        setSelectedItem(null);
    };

    const handleEdit = (item: ItemDetails) => {
        setSelectedItem(item);
        setDialogMode('edit');
        setOpenItemDialog(true);
    };

    const handleAddNewItem = () => {
        setSelectedItem(null);
        setDialogMode('add');
        setOpenItemDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenItemDialog(false);
        setSelectedItem(null);
    };

    const handleDelete = async (item: ItemDetails) => {
        try {
            await deleteItem({
                restaurantId: restaurant.id,
                itemId: item.id,
            }).unwrap();

            dispatch(
                showSnackbar({
                    message: 'Item deleted successfully',
                    severity: 'success',
                }),
            );
        } catch (err) {
            dispatch(
                showSnackbar({
                    message: getErrorMessage(err as FetchBaseQueryError | SerializedError),
                    severity: 'error',
                }),
            );
        }
    };

    /**
     * Saves the item dialog form — creates a new item if in "add" mode,
     * or updates the currently selected item if in "edit" mode.
     */
    const handleSave = async (formData: ItemFormData) => {
        try {
            if (dialogMode === 'edit' && selectedItem) {
                await updateItem({
                    restaurantId: restaurant.id,
                    itemId: selectedItem.id,
                    formData,
                }).unwrap();
            } else {
                await createItem({
                    restaurantId: restaurant.id,
                    formData,
                }).unwrap();
            }
            handleCloseDialog();
        } catch (err) {
            dispatch(
                showSnackbar({
                    message: getErrorMessage(err as FetchBaseQueryError | SerializedError),
                    severity: 'error',
                }),
            );
        }
    };

    const handleNavigateToStats = () => {
        void navigate(ROUTES.RESTAURANTS.ANALYTICS.ROOT(restaurant.id), {
            state: restaurant,
        });
    };

    /**
     * Warns the user when the next increment would hit the item's max
     * available quantity
     */
    const handleMaxAvailaiblity = (item: ItemDetails, quantity: number) => {
        if (quantity + 1 === item.quantity) {
            dispatch(
                showSnackbar({
                    message: 'Maximum available quantity reached.',
                    severity: 'warning',
                }),
            );
        }
    };

    return (
        <StyledContainer maxWidth="md">
            <Box mb={3}>
                <StyledMenuTopBox mb={2}>
                    <ClampedTypography title={restaurant?.name}>
                        {restaurant?.name || 'Restaurant Name'}
                    </ClampedTypography>

                    {role === ROLE.ADMIN && (
                        <Stack direction="row" spacing={1.5}>
                            <Button
                                variant="outlined"
                                color="primary"
                                startIcon={<BarChart />}
                                onClick={handleNavigateToStats}
                                size="small"
                            >
                                Stats
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<AddIcon />}
                                onClick={handleAddNewItem}
                                size="small"
                            >
                                Add Item
                            </Button>
                        </Stack>
                    )}
                </StyledMenuTopBox>

                <StyledImage
                    src={restaurant?.image || restaurantImg}
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
                            image={item.image ?? dishImage}
                            orientation="horizontal"
                            details={[
                                {
                                    icon: <MicroIcon />,
                                    value: item.price,
                                    showTooltip: false,
                                },

                                { value: item.category, showTooltip: true },
                                { value: item.cuisine, showTooltip: true },
                                {
                                    value: `Available: ${item.quantity}`,
                                    showTooltip: false,
                                },
                                {
                                    icon: <Star color="success" />,
                                    value: `${item.rating}`,
                                    showTooltip: false,
                                },
                            ]}
                            action={
                                role === ROLE.ADMIN ? (
                                    <Stack direction="row" spacing={1}>
                                        <StyledCardIcon
                                            variant="outlined"
                                            color="success"
                                            onClick={() => handleEdit(item)}
                                        >
                                            <Edit />
                                        </StyledCardIcon>

                                        <StyledCardIcon
                                            variant="outlined"
                                            color="error"
                                            onClick={() => void handleDelete(item)}
                                        >
                                            <Delete />
                                        </StyledCardIcon>
                                    </Stack>
                                ) : (
                                    token &&
                                    (quantity === 0 ? (
                                        <StyledItemCardButton
                                            variant="outlined"
                                            onClick={() => {
                                                handleAddToCart(item);
                                                handleMaxAvailaiblity(item, quantity);
                                            }}
                                        >
                                            ADD
                                        </StyledItemCardButton>
                                    ) : (
                                        <QuantitySelector
                                            quantity={quantity}
                                            disableIncrement={quantity >= item.quantity}
                                            onIncrement={() => {
                                                dispatch(incrementItem(item.id));
                                                handleMaxAvailaiblity(item, quantity);
                                            }}
                                            onDecrement={() => dispatch(decrementItem(item.id))}
                                        />
                                    ))
                                )
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
                open={openConfirmationDialog}
                title="Replace Cart?"
                description="Your cart contains items from another restaurant. Do you want to clear your current cart and add this item?"
                confirmText="Replace"
                onConfirm={handleReplace}
                onCancel={handleCancel}
            />

            <ItemDialog
                open={openItemDialog}
                mode={dialogMode}
                item={selectedItem}
                onClose={handleCloseDialog}
                onSave={(formData) => void handleSave(formData)}
            />
        </StyledContainer>
    );
};
