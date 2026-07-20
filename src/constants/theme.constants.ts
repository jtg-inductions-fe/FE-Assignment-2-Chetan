/**
 * Color palette used in the application.
 * @constant
 */
export const COLORS = {
    PRIMARY: {
        MAIN: '#FF5200',
    },
    SECONDARY: {
        MAIN: '#1ba672',
    },
    TEXT: {
        PRIMARY: '#000000',
        SECONDARY: '#02060c99',
        INVERSE: '#FFFFFF',
    },
    BACKGROUND: {
        DEFAULT: '#FFFFFF',
        PAPER: '#37718e',
    },
    COMMON: {
        LIGHT: '#FFFFFF',
        DARK: '#000000',
    },
    ACTION: {
        HOVER: '#02060C05',
        SELECTED: '#FF52000d',
        DISABLED: '#02060C3D',
    },
    DIVIDER: '#02060c14',
    ERROR: '#E43E3E',
} as const;

/**
 * Base font size in pixels.
 * @constant
 */
export const HTML_FONT_SIZE = 10;

/**
 * Scaling factor used for spacing.
 * @constant
 */
export const SCALING_FACTOR = 4;

export const FONT_WEIGHT = {
    LIGHT: 400,
    REGULAR: 500,
    MEDIUM: 600,
    BOLD: 700,
} as const;
