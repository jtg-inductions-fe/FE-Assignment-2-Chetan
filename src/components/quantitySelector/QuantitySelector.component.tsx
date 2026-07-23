import { Add, Remove } from '@mui/icons-material';
import { Typography } from '@mui/material';

import { StyledQuantityButton, StyledQuantityContainer } from './QuantitySelector.styles';
import { QuantitySelectorProps } from './QuantitySelector.types';

export const QuantitySelector = ({ quantity, onIncrement, onDecrement }: QuantitySelectorProps) => (
    <StyledQuantityContainer>
        <StyledQuantityButton onClick={onDecrement}>
            <Remove fontSize="small" />
        </StyledQuantityButton>

        <Typography variant="subtitle1">{quantity}</Typography>

        <StyledQuantityButton onClick={onIncrement}>
            <Add fontSize="small" />
        </StyledQuantityButton>
    </StyledQuantityContainer>
);
