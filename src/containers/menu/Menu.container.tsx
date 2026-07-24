import { useEffect, useState } from 'react';

import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { Add as AddIcon, BarChart, Star } from '@mui/icons-material';
import { Box, Button, Stack } from '@mui/material';

import img from '@assets/images/dummyRestaurant.webp';
import {
    BottomActionBar,
    Card,
    ConfirmationDialog,
    EmptyState,
    ItemDialog,
    ItemFormData,
    Loading,
    QuantitySelector,
} from '@components';
import { ROLE, ROUTES } from '@constants';
import { RestaurantBasicDetails } from '@containers';
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
    const [updateItem] = useUpdateItemMutation();
    const role = useAppSelector((state) => state.auth.role);
    const cartItems = useAppSelector((state) => state.cart.items);
    const [createItem, { isLoading: isCreating }] = useCreateItemMutation();
    const [deleteItem] = useDeleteItemMutation();

    const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);
    const [selectedItem, setSelectedItem] = useState<ItemDetails | null>(null);

    const [openItemDialog, setOpenItemDialog] = useState(false);
    const [dialogMode, setDialogMode] = useState<'add' | 'edit'>('add');

    const token = localStorage.getItem('accessToken');
    const restaurant = location.state as RestaurantBasicDetails;



    const { restaurantId } = useParams();
    const { data, isLoading, error } = useGetMenuItemsQuery(restaurantId ?? '');

    useEffect(() => {
        if (error) {
            dispatch(
                showSnackbar({
                    message: getErrorMessage(error),
                    severity: 'error',
                }),
            );
        }
    }, [error, dispatch]);

    if (isLoading || isCreating) return <Loading />;

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
        void navigate(ROUTES.DASHBOARD.RESTAURANTS.ANALYTICS.ROOT(restaurant.id), {
            state: restaurant,
        });
    };

   
    return (
        <StyledContainer maxWidth="md">
            <Box mb={3}>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <CustomHeading>{restaurant?.name || 'Restaurant Name'}</CustomHeading>

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
                </Box>

                <StyledImage
                    src={restaurant?.image || img}
                    alt={restaurant?.name || 'Restaurant Image'}
                />
            </Box>

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
                                role === ROLE.ADMIN ? (
                                    <Stack direction="row" spacing={1}>
                                        <StyledItemCardButton
                                            variant="outlined"
                                            onClick={() => handleEdit(item)}
                                        >
                                            Edit
                                        </StyledItemCardButton>

                                        <StyledItemCardButton
                                            variant="outlined"
                                            color="error"
                                            onClick={() => void handleDelete(item)}
                                        >
                                            Delete
                                        </StyledItemCardButton>
                                    </Stack>
                                ) : (
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
