import React, { ReactNode, createContext, useContext, useState } from 'react';
import ITheme, { IColors } from '../interfaces/ITheme';

const defaultColors: IColors = {
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
  topbarPrimaryBackground: '#007bff',
  topbarPrimaryContrast: '#fff',
  topbarSecondaryBackground: '#6c757d',
  topbarSecondaryContrast: '#fff',
  topbarActivedMenuItemContrast: '#007bff',
  topbarActivedMenuItemText: '#fff',
  topbarInputBackground: '#fff',
  topbarInputBorder: '#ccc',
  topbarInputAdornmentIcon: '#555',
  topbarInput: '#555',
};

const defaultTheme: ITheme = {
  lightColors: defaultColors,
  darkColors: {
    ...defaultColors,
    primary: '#3498db',
    secondary: '#34495e',
    body: '#222',
    bodyContrast: '#fff',
  },
};

export default defaultTheme;

interface ThemeContextType {
  theme: ITheme;
  setTheme: (theme: ITheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>(defaultTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
