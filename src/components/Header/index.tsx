import React from 'react';
import styled from 'styled-components';
import ITheme from '../../interfaces/ITheme';

const HeaderContainer = styled.header<{ theme: ITheme }>`
  background-color: ${(props) => props.theme.lightColors.topbarPrimaryBackground};
  color: ${(props) => props.theme.lightColors.topbarPrimaryContrast};
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Navigation = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 20px;

    li {
      a {
        text-decoration: none;
        color: ${(props) => props.theme.lightColors.topbarPrimaryContrast};

        &:hover {
          color: ${(props) => props.theme.lightColors.topbarActivedMenuItemContrast};
        }
      }
    }
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>Your Logo</Logo>
      <Navigation>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
