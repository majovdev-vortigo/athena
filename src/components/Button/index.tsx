import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Button as ButtonMui } from '@mui/material';

interface ButtonProps {
    text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
    const { theme } = useTheme();

    return (
        <ButtonMui
            variant="contained"
            color="secondary"
            style={{ backgroundColor: theme.lightColors.primary }}
        >
            {text}
        </ButtonMui>
    );
}
 
export default Button;