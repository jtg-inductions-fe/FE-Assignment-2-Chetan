import { Box, Card, ListItemButton, styled } from '@mui/material';

import type { CardOrientation } from './Card.types';

export const StyledCard = styled(Card)<CardOrientation>(({ theme, orientation }) => ({
    width: '100%',
    backgroundColor: theme.palette.common.white,
    transition: 'all 0.2s ease',

    ...(orientation === 'vertical'
        ? {
              maxWidth: theme.typography.pxToRem(340),
              borderRadius: theme.shape.borderRadius * 4,
              '&:hover': {
                  transform: 'scale(0.95)',
                  boxShadow: 6,
              },
          }
        : {
              marginTop: theme.typography.pxToRem(20),
              boxShadow: 'none',
              borderBottom: `2px solid ${theme.palette.divider}`,
              padding: theme.spacing(3),
              ...theme.mixins.flexLayout('row', 'space-between', 'start'),
          }),
}));

export const StyledCardButton = styled(ListItemButton)({
    padding: 0,
    display: 'block',
    width: '100%',
});

export const StyledCardMedia = styled('img')<CardOrientation>(({ theme, orientation }) => ({
    objectFit: 'cover',

    ...(orientation === 'vertical'
        ? {
              width: '100%',
              height: theme.typography.pxToRem(180),
              borderRadius: theme.shape.borderRadius * 4,
          }
        : {
              width: theme.typography.pxToRem(144),
              height: theme.typography.pxToRem(144),
              borderRadius: theme.shape.borderRadius * 3,
          }),
}));

export const StyledContent = styled(Box)<CardOrientation>(({ theme, orientation }) => ({
    ...(orientation === 'vertical'
        ? {
              padding: theme.spacing(2),
          }
        : {
              flex: 1,
              paddingRight: theme.spacing(2),
              ...theme.mixins.flexLayout('column', 'center', 'start'),
              gap: theme.spacing(1),
          }),
}));

export const StyledImageContainer = styled(Box)(({ theme }) => ({
    ...theme.mixins.flexLayout('column', 'center', 'center'),
    gap: theme.spacing(2),
}));

export const StyledInfoBox = styled(Box)(({ theme }) => ({
    ...theme.mixins.flexLayout('row', 'start', 'center'),
    gap: theme.spacing(1),
    marginTop: theme.spacing(0.5),
    color: theme.palette.text.secondary,
}));
