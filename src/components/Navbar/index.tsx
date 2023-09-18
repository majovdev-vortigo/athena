import styled from 'styled-components';
import BtnTheme from '../BtnTheme';

const NavbarContainer = styled.div`  
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.palette.body};
  border-right: 1px solid #ccc;
  width: 200px;
  height: calc(100vh - 60px);
  padding: 20px 10px;
  color: ${(props) => props.theme.palette.primary.main};
`;


interface NovbarProps {
    dark: boolean;
    setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = (props: NovbarProps) => {
    return (
        <NavbarContainer>
            <div>FOTO</div>
            <div>NOME DO USUÁRIO</div>
            <ul>
                <li>INICIO</li>
                <li>PERFIL</li>
            </ul>
            <ul>
                <li>MEU APRENDIZADO</li>
                <li>JORNADAS</li>
                <li>OBRIGATÓRIOS</li>
                <li>DESTAQUES</li>
            </ul>
            <ul>
                <li>ESPAÇO CONEXÃO</li>
                <li>ATENAFLIX</li>
                <li>BIBLIOTECA</li>
            </ul>
            <div style={{ position: "absolute", bottom: "10px" , width:"100%"}}>
                <BtnTheme dark={props.dark} setTheme={props.setTheme}/>
            </div>
        </NavbarContainer>
    );
};

export default Navbar;
