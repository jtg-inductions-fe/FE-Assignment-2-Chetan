import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledQuantityContainer = styled(Box)(({ theme }) => ({
    ...theme.mixins.flexLayout('row', 'space-between', 'center'),
    width: theme.typography.pxToRem(115),
    height: theme.typography.pxToRem(36),
    border: `1px solid ${theme.palette.success.main}`,
    borderRadius: theme.shape.borderRadius * 2,
    backgroundColor: theme.palette.common.white,
}));

export const StyledQuantityButton = styled(IconButton)(({ theme }) => ({
    width: theme.typography.pxToRem(36),
    height: theme.typography.pxToRem(36),
    color: theme.palette.success.main,
}));
