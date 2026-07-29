import type { Theme } from '@mui/material/styles';
import type { TypographyOptions, TypographyUtils } from '@mui/material/styles/createTypography';

import { FONT_WEIGHT, HTML_FONT_SIZE } from '@constants';

/* Custom px to rem function */
const typographyUtil: TypographyUtils = {
    /**
     * Converts a pixel value to rem units.
     * @param px - The pixel value to convert.
     * @returns The equivalent value in rem units as a string.
     */
    pxToRem: (px: number) => `${px / HTML_FONT_SIZE}` + 'rem',
};

/**
 * Creates a typography block with various styles
 * @param theme - Theme object to access the breakpoints.
 * @returns The function returns a TypographyOptions object, which includes various typography settings,
 */

const typographyStyle = (theme: Theme): TypographyOptions => ({
    fontFamily: 'Inter',
    htmlFontSize: HTML_FONT_SIZE,

    fontWeightLight: FONT_WEIGHT.LIGHT,
    fontWeightRegular: FONT_WEIGHT.REGULAR,
    fontWeightMedium: FONT_WEIGHT.MEDIUM,
    fontWeightBold: FONT_WEIGHT.BOLD,

    h1: {
        fontSize: typographyUtil.pxToRem(30),
        fontWeight: FONT_WEIGHT.BOLD,
        lineHeight: typographyUtil.pxToRem(45),

        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(48),
            lineHeight: typographyUtil.pxToRem(62.5),
        },
    },
    h2: {
        fontSize: typographyUtil.pxToRem(26),
        fontWeight: FONT_WEIGHT.MEDIUM,
        lineHeight: typographyUtil.pxToRem(32),

        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(32),
            lineHeight: typographyUtil.pxToRem(40),
        },
    },
    h3: {
        fontSize: typographyUtil.pxToRem(24),
        fontWeight: FONT_WEIGHT.MEDIUM,
        lineHeight: typographyUtil.pxToRem(28),

        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(30),
            lineHeight: typographyUtil.pxToRem(36),
        },
    },
    h4: {
        fontSize: typographyUtil.pxToRem(18),
        fontWeight: FONT_WEIGHT.MEDIUM,
        lineHeight: typographyUtil.pxToRem(22),
    },

    h5: {
        fontSize: typographyUtil.pxToRem(15),
        fontWeight: FONT_WEIGHT.MEDIUM,
        lineHeight: typographyUtil.pxToRem(20),
    },
    h6: {
        fontSize: typographyUtil.pxToRem(14),
        fontWeight: FONT_WEIGHT.BOLD,
        lineHeight: typographyUtil.pxToRem(18),
    },

    subtitle1: {
        fontSize: typographyUtil.pxToRem(14),
        fontWeight: FONT_WEIGHT.MEDIUM,
        lineHeight: typographyUtil.pxToRem(20),
    },

    subtitle2: {
        fontSize: typographyUtil.pxToRem(13),
        fontWeight: FONT_WEIGHT.MEDIUM,
        lineHeight: typographyUtil.pxToRem(18),
    },

    body1: {
        fontSize: typographyUtil.pxToRem(14),
        fontWeight: FONT_WEIGHT.REGULAR,
        lineHeight: typographyUtil.pxToRem(20),
    },
    body2: {
        fontSize: typographyUtil.pxToRem(13),
        fontWeight: FONT_WEIGHT.REGULAR,
        lineHeight: typographyUtil.pxToRem(18),
    },
});

export const typography = { typographyStyle, typographyUtil };
