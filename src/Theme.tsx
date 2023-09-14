import { createTheme } from '@mui/material/styles';
import { IColors } from './interfaces/ITheme';

export const defaultColors = {
    // Default Colors
    primary: '#007bff',
    secondary: '#6c757d',
    error: '#ff0000',
    warning: '#ffc107',

    // Layout Colors
    pageTitle: '#333',
    logo: '#555',
    body: '#fff',
    bodyContrast: '#333',
    primaryHighlightText: '#fff',
    secondaryHighlightText: '#fff',
    lightText: '#888',
    footer: '#333',
    footerContrast: '#fff',

    // Favorite Color
    favorite: '#ff5733',

    // Input Colors
    inputBackground: '#fff',
    inputBorder: '#ccc',

    // Modal Colors
    backdrop: 'rgba(0, 0, 0, 0.5)',

    // List Colors
    stripedListItemOne: '#f9f9f9',
    stripedListItemTwo: '#e9e9e9',

    // Topbar Colors
    topbarLogo: '#fff',
    topbarPrimaryBackground: '#FFF',
    topbarPrimaryContrast: '#fff',
    topbarSecondaryBackground: '#6c757d',
    topbarSecondaryContrast: '#fff',
    topbarActivedMenuItemContrast: '#FFF',
    topbarActivedMenuItemText: '#fff',
    topbarInputBackground: '#fff',
    topbarInputBorder: '#ccc',
    topbarInputAdornmentIcon: '#555',
    topbarInput: '#555',
};

const defaultDarkColors: IColors = {
    ...defaultColors,
    primary: '#3498db',
    secondary: '#34495e',
    body: '#222',
    bodyContrast: '#fff',
  };
  
const lightTheme = createTheme({
    palette: {
        primary: {
            main: defaultColors.primary,
        },
        secondary: {
            main: defaultColors.secondary,
        },
        error: {
            main: defaultColors.error,
        },
        warning: {
            main: defaultColors.warning,
        },
        text: {
            primary: defaultColors.pageTitle,
            secondary: defaultColors.lightText,
        },
        background: {
            default: defaultColors.body,
            paper: defaultColors.body,
        },
        action: {
            active: defaultColors.primaryHighlightText,
        },
    },
    typography: {
        fontFamily: 'Arial, sans-serif',
    },
});

const darkTheme = createTheme({
    palette: {
        primary: {
            main: defaultDarkColors.primary,
        },
        secondary: {
            main: defaultDarkColors.secondary,
        },
        error: {
            main: defaultDarkColors.error,
        },
        warning: {
            main: defaultDarkColors.warning,
        },
        text: {
            primary: defaultDarkColors.pageTitle,
            secondary: defaultDarkColors.lightText,
        },
        background: {
            default: defaultDarkColors.body,
            paper: defaultDarkColors.body,
        },
        action: {
            active: defaultDarkColors.primaryHighlightText,
        },
        mode: 'dark',
    },
    typography: {
        fontFamily: 'Arial, sans-serif',
    },
});

export { lightTheme, darkTheme };
