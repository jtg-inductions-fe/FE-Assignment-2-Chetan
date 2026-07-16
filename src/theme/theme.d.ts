export declare module '@mui/material/styles/createMixins' {
    interface Mixins {
        lineClamp: (lines: number) => CSSProperties;
        flexLayout: (
            direction?: CSSProperties['flexDirection'],
            justify?: CSSProperties['justifyContent'],
            align?: CSSProperties['alignItems'],
        ) => CSSProperties;
    }
}
