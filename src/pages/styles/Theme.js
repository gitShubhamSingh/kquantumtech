import {createTheme, responsieFontSizes} from '@mui/material'

const lightTheme = createTheme({
    palette:{
        primary:{
            /* Blue and there shades  */
            main:"#0052CC", /* Admiral */
            light:"#2832C2", /* Lapis */
            dark:"#0A1172", /* Navy */
            contrastText:"#492C2" /* Cerulean */
        },
        secondary:{
            /* Black and There Shades */
            main:"#3F3F4E", /* Lead */
            light:"#59515E", /* Smoke */
            dark:"#232023", /* Charcole */
            contrastText:"#C5C6D0" /* Cloud */
        },
        error:{
            /* Red and there Shades */
            main:"#FF2400", /* Scarlet */
            light:"#E30B5D", /* Respberry */
            dark:"#C80815", /* Venetian Red */
            contrastText:"#FFCBCB" /* Light Red */
        },
        warning:{
            /* Yellow and there Shades */
            main:"#FFD300", /* Cyber Yellow */
            light:"#FFF4F", /* Lemon Yellow */
            dark:"#FFA700", /* Chrome Yellow */
            contrastText:"#FFFF9F" /* Crayola Lemon Yellow */
        },
        info:{
            /* White and there Shades */
            main:"#FBFCF8", /* Pearl White */
            light:"#FFFFFF", /* White */
            dark:"# E7DECC", /* Bone */
            contrastText:"#FBFA82" /* Chiffon */
        },
       
    },
    typography:{
        fontFamily:"Montserrat"
    },
    spacing:{},
    breakpoints:{},
    zIndex:{},
    transitions:{},
    components:{}
});


export const responsiveThemeLight = responsieFontSizes(lightTheme)