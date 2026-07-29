import { Container, styled } from '@mui/material';

export const StyledLayoutContainer = styled(Container)(({ theme }) => ({
    flexGrow: 1,
    paddingBlock: theme.typography.pxToRem(2),
}));
