import { IconButton, Button as MuiButton } from '@mui/material';
import styled from 'styled-components';

const StyledButton = styled(MuiButton)`
  &.MuiButton-text {
    text-transform: none;
  }
`;

interface BtnProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  variant: "text" | "outlined" | "contained";
  btnIcon?:BtnIcon | undefined
}

interface BtnIcon {
  color?: "primary" | "secondary";
  ariaLabel:string
  Icon: React.ElementType
}

const Button = (props: BtnProps) => {
  return (
    <StyledButton
      onClick={props.onClick}
      variant='text'
    >
      {props.btnIcon && <IconButton color="primary" aria-label="Ícone"><props.btnIcon.Icon/></IconButton>}

    </StyledButton>
  );
}

export default Button;