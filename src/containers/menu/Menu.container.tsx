import { useParams } from 'react-router-dom';

import { Star } from '@mui/icons-material';
import { Container } from '@mui/material';

import { Card, EmptyState, Loading, QuantitySelector } from '@components';
import { HeroSection, StyledTypograpgy } from '@containers';
import { useGetMenuItemsQuery } from '@services';
import { addItem, decrementItem, incrementItem, showSnackbar } from '@slices';
import { useAppDispatch, useAppSelector } from '@store';
import { getErrorMessage } from '@utils';

import { MicroIcon, StyledItemCardButton } from './Menu.styles';

export const MenuContainer = () => {
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector((state) => state.cart.items);

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

    return (
        <Container maxWidth="md">
            <HeroSection>
                <StyledTypograpgy gutterBottom>Menu</StyledTypograpgy>
            </HeroSection>

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
                                quantity === 0 ? (
                                    <StyledItemCardButton
                                        variant="outlined"
                                        onClick={() =>
                                            dispatch(
                                                addItem({
                                                    id: item.id,
                                                    name: item.name,
                                                    price: item.price,
                                                    quantity: 1,
                                                }),
                                            )
                                        }
                                    >
                                        ADD
                                    </StyledItemCardButton>
                                ) : (
                                    <QuantitySelector
                                        quantity={quantity}
                                        onIncrement={() => dispatch(incrementItem(item.id))}
                                        onDecrement={() => dispatch(decrementItem(item.id))}
                                    />
                                )
                            }
                        />
                    );
                })
            )}
        </Container>
    );
};
