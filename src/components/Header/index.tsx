import styled from 'styled-components';
// import { Button as ButtonMui, IconButton } from '@mui/material';

import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import InputOutlinedIcon from '@mui/icons-material/InputOutlined';
import  Button  from '../Button';


const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.palette.body};
  height: 60px;
  border-bottom: 1px solid #ccc;
  padding: 0 24px;
  color: ${(props) => props.theme.palette.primary.main};
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div>LOGO</div>
      <div>SEARCH</div>
      <div>
        {/* <Button variant={'text'} btnIcon={undefined} >AA</Button> */}
        {/* <IconButton color="primary" aria-label="Ícone"><NotificationsOutlinedIcon /></IconButton>
        <ButtonMui variant='text'><IconButton color="primary" aria-label="Ícone"><HelpOutlineOutlinedIcon />  </IconButton>Ajuda</ButtonMui>
        <IconButton color="primary" aria-label="Ícone"><InputOutlinedIcon /></IconButton> */}
      </div>
    </HeaderContainer>
  );
};

export default Header;
