import type { Components } from '@mui/material/styles';

// Local Font files
import InterRegularTTF from '@assets/fonts/inter/inter-regular.ttf';
import InterRegularWOFF2 from '@assets/fonts/inter/inter-regular.woff2';

export const components: Components = {
    MuiCssBaseline: {
        styleOverrides: {
            html: {
                fontSize: '62.5%',
            },
            '@font-face': {
                fontDisplay: 'swap',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 500,
                src: `url(${InterRegularWOFF2}) format('woff2'), url(${InterRegularTTF}) format('truetype')`,
            },
        },
    },
};
