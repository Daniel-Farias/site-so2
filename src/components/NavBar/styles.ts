import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface NavbarProps {
  open: boolean;
}

export const Header = styled.header`
  margin-bottom: 30px;
`;

export const NavbarContainer = styled.nav<NavbarProps>`
  top: 0;
  width: 100%;
  height: ${(props) => (props.open ? '30vh' : '80px')};
  background-color: #39405c;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  transition: 0.5s;
  padding: 0 30px;

  @media (min-width: 700px) {
    height: 70px;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: ${(props) => (props.open ? 'flex-start' : 'center')};
    align-items: normal;
  }
`;

export const Img = styled.img`
  max-width: 40px;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

const LinkBaseStyle = css`
  color: white;
  font-size: 1.3rem;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  font-weight: bold;
  margin-left: 50px;
  transition: 0.5s;

  &:hover {
    color: #ff9000;
  }
`;

export const NavbarLinkBase = styled(Link)`
  ${LinkBaseStyle}
`;
export const AnchorBase = styled.a`
  ${LinkBaseStyle};
`;

export const NavbarLinkExtended = styled(NavbarLinkBase)``;
export const AnchorLinkExtended = styled(AnchorBase)``;

export const NavbarLink = styled(NavbarLinkBase)`
  @media (max-width: 700px) {
    display: none;
  }
`;
export const Anchor = styled(AnchorBase)`
  @media (max-width: 700px) {
    display: none;
  }
`;

export const ButtonLink = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 40px;
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const ExtendedNavbar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }
`;
