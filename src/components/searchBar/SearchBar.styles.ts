import { IconButton, InputBase, Paper, styled } from '@mui/material';

import { FONT_WEIGHT } from '@constants';

export const SearchBarContainer = styled(Paper)(({ theme }) => ({
    ...theme.mixins.flexLayout('row', 'center', 'center'),
    marginTop: theme.typography.pxToRem(60),
    backgroundColor: theme.palette.common.white,
    borderRadius: theme.typography.pxToRem(50),

    [theme.breakpoints.up('md')]: {
        fontSize: theme.typography.pxToRem(88),
        width: theme.typography.pxToRem(500),
    },
}));

export const InputContainer = styled(InputBase)(({ theme }) => ({
    marginLeft: theme.typography.pxToRem(40),
    flex: 1,
    color: theme.palette.text.secondary,
    fontWeight: FONT_WEIGHT.REGULAR,
}));

export const ButtonContainer = styled(IconButton)(({ theme }) => ({
    padding: theme.typography.pxToRem(10),
    marginRight: theme.typography.pxToRem(18),
}));
