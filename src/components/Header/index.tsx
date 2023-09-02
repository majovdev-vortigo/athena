import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.text.primary};
  padding: 20px;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Header Component</h1>
      <p>This header changes color based on the theme.</p>
    </HeaderContainer>
  );
};

export default Header;
