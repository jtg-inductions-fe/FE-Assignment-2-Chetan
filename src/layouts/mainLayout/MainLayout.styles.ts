import { Box, Container, styled } from '@mui/material';

export const StyledBox = styled(Box)(({ theme }) => ({
    marginLeft: 0,
    width: '100%',

    [theme.breakpoints.up('md')]: {
        marginLeft: theme.typography.pxToRem(250),
        width: `calc(100% - ${theme.typography.pxToRem(250)})`,
    },
}));

export const StyledLayoutContainer = styled(Container)({
    flexGrow: 1,
});
