import { ClampedTypography } from 'components/typography';

import { Tooltip, Typography } from '@mui/material';

import restaurantPlaceholder from '@assets/images/dummyRestaurant.webp';

import {
    StyledCard,
    StyledCardButton,
    StyledCardMedia,
    StyledContent,
    StyledImageContainer,
    StyledInfoBox,
} from './Card.styles';
import type { CardProps } from './Card.types';

export const Card = ({
    name,
    image,
    details,
    action,
    onClick,
    orientation = 'vertical',
}: CardProps) => {
    const content = (
        <StyledContent orientation={orientation}>
            <ClampedTypography variant="h3" title={name}>
                {name}
            </ClampedTypography>

            {details?.map((detail, index) => (
                <StyledInfoBox key={index}>
                    {detail.icon}

                    {detail.showTooltip ? (
                        <Tooltip title={detail.value} arrow>
                            <ClampedTypography variant="body2">{detail.value}</ClampedTypography>
                        </Tooltip>
                    ) : (
                        <Typography variant="body2">{detail.value}</Typography>
                    )}
                </StyledInfoBox>
            ))}
        </StyledContent>
    );

    if (orientation === 'horizontal') {
        return (
            <StyledCard orientation={orientation}>
                {content}

                <StyledImageContainer>
                    <StyledCardMedia
                        orientation={orientation}
                        src={image ?? restaurantPlaceholder}
                    />
                    {action}
                </StyledImageContainer>
            </StyledCard>
        );
    }

    return (
        <StyledCard orientation={orientation}>
            <StyledCardButton onClick={onClick}>
                <StyledCardMedia orientation={orientation} src={image ?? restaurantPlaceholder} />

                {content}

                {action}
            </StyledCardButton>
        </StyledCard>
    );
};
