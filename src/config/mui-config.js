import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#618C78",
            50: "#F0F5F2",
            100: "#DEE8E3",
            200: "#C0D3CA",
            300: "#9FBCAE",
            400: "#7EA593",
            500: "#618C78",
            600: "#4D6F5F",
            700: "#3A5448",
            800: "#283931",
            900: "#131B17",
            950: "#0A0F0D"
        },
        secondary: {
            main: "#CB4A4A",
            50: "#F9EBEB",
            100: "#F5DBDB",
            200: "#EBB8B8",
            300: "#E09494",
            400: "#D56C6C",
            500: "#CB4A4A",
            600: "#AA3131",
            700: "#832626",
            800: "#571919",
            900: "#2C0D0D",
            950: "#140606"
        },
        grey: {
            main: "#F2F2F2",
            50: "#FCFCFC",
            100: "#FCFCFC",
            200: "#FAFAFA",
            300: "#F7F7F7",
            400: "#F5F5F5",
            500: "#F2F2F2",
            600: "#C2C2C2",
            700: "#919191",
            800: "#616161",
            900: "#303030",
            950: "#171717",
        },
        text: {
            main: "#1d1d1d",
            50: "#E8E8E8",
            100: "#D1D1D1",
            200: "#A6A6A6",
            300: "#787878",
            400: "#4A4A4A",
            500: "#1D1D1D",
            600: "#171717",
            700: "#121212",
            800: "#0D0D0D",
            900: "#050505",
            950: "#030303",
        },
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                maxWidthXs: {
                    maxWidth: "1280px !important",
                }
            }
        },
    },
    typography: {
        fontFamily: ["Ubuntu", "sans-serif"].join(","),
        h2: {
            fontWeight: 700,
            fontSize: "40px",
            lineHeight: "130%",
            color: "#1d1d1d",
        },
        body1: {
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "100%",
            color: "#1d1d1d"
        },
        body2: {
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "140%",
            color: "#1d1d1d"
        },
        h3: {
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "140%",
            color: "#1d1d1d",
            opacity: 0.5
        },
        h1: {
            fontWeight: 700,
            fontSize: "30px",
            lineHeight: "130%",
            color: "#f9f9f9",
            width: "262px",
            textAlign: "center",
           
            "@media (min-width:900px)": {
                fontSize: "60px",
                width: "524px",
                textAlign: "start"
              },
        },
        h4: {
            fontWeight: 700,
            fontSize: "18px",
            lineHeight: "130%",
            color: "#1d1d1d",
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 320,
            md: 900,
            lg: 1150,
            xl: 1536,
        }
    }
})