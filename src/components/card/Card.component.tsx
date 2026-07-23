import { useNavigate } from 'react-router-dom';

import { Typography } from '@mui/material';

import restaurantPlaceholder from '@assets/images/dummyRestaurant.webp';
import { ROUTES } from '@constants';

import {
    StyledCard,
    StyledCardButton,
    StyledCardMedia,
    StyledContent,
    StyledInfoBox,
} from './Card.styles';
import type { CardProps } from './Card.types';

export const Card = ({ id, name, image, details }: CardProps) => {
    const navigate = useNavigate();

    const handlePath = (restaurantId: string) => {
        void navigate(ROUTES.DASHBOARD.RESTAURANTS.MENU(restaurantId));
    };

    return (
        <StyledCard>
            <StyledCardButton
                onClick={() => {
                    handlePath(id);
                }}
            >
                <StyledCardMedia component="img" image={image ?? restaurantPlaceholder} />

                <StyledContent>
                    <Typography variant="h3">{name}</Typography>

                    {details?.map((detail, index) => (
                        <StyledInfoBox key={index}>
                            {detail.icon}
                            <Typography variant="body2">{detail.value}</Typography>
                        </StyledInfoBox>
                    ))}
                </StyledContent>
            </StyledCardButton>
        </StyledCard>
    );
};
