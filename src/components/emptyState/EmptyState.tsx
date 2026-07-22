import { Typography } from '@mui/material';

import emptyImage from '@assets/images/emptyState.webp';

import { StyledContainer, StyledImage } from './EmptyState.styles';
import { EmptyStateProps } from './EmptyState.types';

export const EmptyState = ({ title, description, image = emptyImage }: EmptyStateProps) => (
    <StyledContainer>
        <StyledImage component="img" image={image} />

        <Typography variant="h3">{title}</Typography>

        <Typography variant="body2">{description}</Typography>
    </StyledContainer>
);
