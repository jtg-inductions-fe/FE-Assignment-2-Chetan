import { Box, Container, Link, styled, Typography } from '@mui/material';

import { COLORS, FONT_WEIGHT } from '@constants';

export const StyledFooter = styled(Box)(({ theme }) => ({
    backgroundColor: COLORS.BACKGROUND.GRAY,
    borderTop: `1px solid ${theme.palette.text.primary}`,
    marginTop: 'auto',
}));

export const FooterContainer = styled(Container)(({ theme }) => ({
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
}));

export const FooterGrid = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),

    [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
}));

export const LinkColumn = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
}));

export const ColumnTitle = styled(Typography)(({ theme }) => ({
    fontWeight: FONT_WEIGHT.BOLD,
    color: theme.palette.common.black,
    marginBottom: 4,
}));

export const FooterLinkItem = styled(Link)(({ theme }) => ({
    color: theme.palette.common.black,

    opacity: 0.7,
    textDecoration: 'none',
    fontSize: theme.typography.pxToRem(8),
    '&:hover': {
        opacity: 1,
    },
}));

export const SocialRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(4),
}));

export const CopyrightBar = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(4),
    paddingTop: theme.spacing(2),
    borderTop: `1px solid ${COLORS.DIVIDER.SECONDARY}`,
    textAlign: 'center',
}));

export const CopyrightText = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.black,
    opacity: 0.6,
    fontSize: theme.typography.pxToRem(7),
}));
