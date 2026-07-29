import { LocationCity, LocationOn, PinDrop } from '@mui/icons-material';
import { Grid2 as Grid } from '@mui/material';

import { Card, EmptyState, Loading, SearchBar } from '@components';
import { useGetRestaurantsQuery } from '@services';

import { HeroSection, RestaurantGrid, StyledParaTypograpgy, StyledTypograpgy } from './Home.styles';

export const HomeContainer = () => {
    const { data, isLoading } = useGetRestaurantsQuery();

    if (isLoading) return <Loading />;

    const restaurants = data?.restaurants ?? [];

    return (
        <>
            <HeroSection>
                <StyledTypograpgy gutterBottom>Restaurants</StyledTypograpgy>

                <StyledParaTypograpgy variant="h6">
                    Discover your favourite restaurants and enjoy delicious meals delivered to your
                    doorstep.
                </StyledParaTypograpgy>

                <SearchBar />
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
                                    details={[
                                        {
                                            icon: <LocationOn fontSize="small" />,
                                            value: restaurant.location,
                                        },
                                        {
                                            icon: <LocationCity fontSize="small" />,
                                            value: restaurant.city,
                                        },
                                        {
                                            icon: <PinDrop fontSize="small" />,
                                            value: restaurant.pincode,
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
