export interface IColors {
    // default
    primary: string;
    secondary: string;
    error: string;
    warning: string;
    // layout
    pageTitle: string;
    logo: string;
    body: string;
    bodyContrast: string;
    primaryHighlightText: string;
    secondaryHighlightText: string;
    lightText: string;
    footer: string;
    footerContrast: string;
    // favorite
    favorite: string;
    // input text
    inputBackground: string;
    inputBorder: string;
    // modals
    backdrop: string;
    // lists
    stripedListItemOne: string;
    stripedListItemTwo: string;
    // topbar
    topbarLogo: string;
    topbarPrimaryBackground: string;
    topbarPrimaryContrast: string;
    topbarSecondaryBackground: string;
    topbarSecondaryContrast: string;
    topbarActivedMenuItemContrast: string;
    topbarActivedMenuItemText: string;
    topbarInputBackground: string;
    topbarInputBorder: string;
    topbarInputAdornmentIcon: string;
    topbarInput: string;
}

export default interface ITheme {
    lightColors: IColors;
    darkColors: IColors;
}