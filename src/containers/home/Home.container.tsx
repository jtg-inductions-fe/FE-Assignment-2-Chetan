import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { LocationCity, LocationOn, PinDrop } from '@mui/icons-material';
import { Grid2 as Grid, Typography } from '@mui/material';

import { Card, EmptyState, Loading, SearchBar } from '@components';
import { ROLE, ROUTES } from '@constants';
import { useApiErrorHandler } from '@hooks';
import { useGetRestaurantsQuery, useGetUserQuery } from '@services';
import { useAppSelector } from '@store';
import { theme } from '@theme';

import { HeroSection, RestaurantGrid, StyledTypographyBox } from './Home.styles';

export const HomeContainer = () => {
    const navigate = useNavigate();
    const { role, id } = useAppSelector((state) => state.auth);
    const [searchTerm, setSearchTerm] = useState('');

    const { data, isLoading, error } = useGetRestaurantsQuery(searchTerm, {
        skip: role === ROLE.ADMIN,
    });

    const {
        data: user,
        isLoading: isFetching,
        error: userError,
    } = useGetUserQuery(id as string, {
        skip: role !== ROLE.ADMIN,
    });

    const restaurants = role === ROLE.ADMIN ? (user?.restaurants ?? []) : (data?.restaurants ?? []);

    useApiErrorHandler(userError, error);

    if (isLoading || isFetching) return <Loading />;

    const handleSearch = (term: string) => {
        setSearchTerm(term);
    };

    return (
        <>
            <HeroSection>
                <StyledTypographyBox>
                    <Typography gutterBottom>Restaurants</Typography>
                </StyledTypographyBox>

                <Typography
                    color={theme.palette.secondary.contrastText}
                    marginTop={theme.typography.pxToRem(15)}
                    variant="h6"
                >
                    {
                        'Discover your favourite restaurants and enjoy delicious meals delivered to yourdoorstep.'
                    }
                </Typography>
                {role !== ROLE.ADMIN && <SearchBar onSearch={handleSearch} />}
            </HeroSection>

            {restaurants.length === 0 ? (
                <EmptyState
                    title="No Restaurants Found"
                    description="There are no restaurants available at the moment."
                />
            ) : (
                <RestaurantGrid>
                    <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
                        {restaurants?.map((restaurant) => (
                            <Grid
                                key={restaurant.id}
                                display="flex"
                                justifyContent="center"
                                size={{ xs: 12, sm: 6, md: 3 }}
                            >
                                <Card
                                    id={restaurant.id}
                                    name={restaurant.name}
                                    image={restaurant.image}
                                    orientation="vertical"
                                    onClick={() => {
                                        void navigate(ROUTES.RESTAURANTS.MENU(restaurant.id), {
                                            state: {
                                                id: restaurant.id,
                                                name: restaurant.name,
                                                image: restaurant.image,
                                            },
                                        });
                                    }}
                                    details={[
                                        {
                                            icon: <LocationOn fontSize="small" />,
                                            value: restaurant.location,
                                            showTooltip: true,
                                        },
                                        {
                                            icon: <LocationCity fontSize="small" />,
                                            value: restaurant.city,
                                            showTooltip: true,
                                        },
                                        {
                                            icon: <PinDrop fontSize="small" />,
                                            value: restaurant.pincode,
                                            showTooltip: false,
                                        },
                                    ]}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </RestaurantGrid>
            )}
        </>
    );
};
