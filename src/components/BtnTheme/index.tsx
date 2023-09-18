import LightModeIconOutlined from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { Button as ButtonMui, IconButton } from '@mui/material';
import styled from 'styled-components';

const Button = styled(ButtonMui)`
    &.MuiButton-text{
        text-transform: none;
        width: 100%;
    }
`;

interface BtnThemeProps {
    dark: boolean;
    setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

const BtnTheme = (props: BtnThemeProps) => {
    return (
        <Button
            onClick={() => props.setTheme(!props.dark)}
            variant='text'
        >
            <IconButton color="primary" aria-label="Ícone">
                {props.dark ? <DarkModeOutlinedIcon /> : <LightModeIconOutlined />}

            </IconButton>

            {props.dark ? "Modo Escuro" : "Modo Claro"}
        </Button>
    );
}

export default BtnTheme;