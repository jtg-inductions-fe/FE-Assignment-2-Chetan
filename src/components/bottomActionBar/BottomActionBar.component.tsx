import { Typography } from '@mui/material';

import { ActionButton, Content, StyledPaper } from './BottomActionBar.styles';
import { BottomActionBarProps } from './BottomActionBar.types';

export const BottomActionBar = ({ leftText, buttonText, onClick }: BottomActionBarProps) => (
    <StyledPaper elevation={3}>
        <Content>
            <Typography fontWeight={600}>{leftText}</Typography>

            <ActionButton variant="text" onClick={onClick}>
                {buttonText}
            </ActionButton>
        </Content>
    </StyledPaper>
);
