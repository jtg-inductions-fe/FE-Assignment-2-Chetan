import type { BreakpointsOptions } from '@mui/material/styles';

import { BREAKPOINTS } from '@constants';

// TODO: Add custom breakpoints here
/* Custom Breakpoints */
export const breakpoints: BreakpointsOptions = {
    values: {
        xs: BREAKPOINTS.EXTRA_SMALL,
        sm: BREAKPOINTS.SMALL,
        md: BREAKPOINTS.MEDIUMN,
        lg: BREAKPOINTS.LARGE,
        xl: BREAKPOINTS.EXTRA_LARGE,
    },
} as const;
