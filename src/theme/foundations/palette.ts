import type { PaletteOptions } from '@mui/material/styles';

import { COLORS } from '@constants';

export const palette: PaletteOptions = {
    primary: {
        main: COLORS.PRIMARY.MAIN,
        contrastText: COLORS.COMMON.LIGHT,
    },

    secondary: {
        main: COLORS.SECONDARY.MAIN,
        contrastText: COLORS.COMMON.LIGHT,
    },

    success: {
        main: COLORS.SECONDARY.MAIN,
        contrastText: COLORS.COMMON.LIGHT,
    },
    error: {
        main: COLORS.ERROR,
        contrastText: COLORS.COMMON.LIGHT,
    },

    text: {
        primary: COLORS.TEXT.PRIMARY,
        secondary: COLORS.TEXT.SECONDARY,
        disabled: COLORS.TEXT.INVERSE,
    },

    background: {
        default: COLORS.BACKGROUND.DEFAULT,
        paper: COLORS.BACKGROUND.PAPER,
    },

    common: {
        white: COLORS.COMMON.LIGHT,
        black: COLORS.COMMON.DARK,
    },

    divider: COLORS.DIVIDER.MAIN,

    action: {
        active: COLORS.PRIMARY.MAIN,
        hover: COLORS.ACTION.HOVER,
        selected: COLORS.ACTION.SELECTED,
        disabled: COLORS.ACTION.DISABLED,
    },
};
