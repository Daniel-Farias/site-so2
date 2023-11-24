import React, { useState } from 'react';
import * as S from './styles';
import logo from '../../assets/images/UESPI_logo.png';

export default function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <S.Header>
      <S.NavbarContainer open={extendNavbar}>
        <S.Img src={logo} alt="" />
        <S.NavbarLinkContainer>
          <S.NavbarLink to="/home">Home</S.NavbarLink>
          <S.NavbarLink to="/about">About Us</S.NavbarLink>
          <S.NavbarLink to="/contact">Contact Us</S.NavbarLink>
          <S.ButtonLink onClick={() => setExtendNavbar((curr) => !curr)}>
            {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
          </S.ButtonLink>
        </S.NavbarLinkContainer>
        {extendNavbar && (
          <S.ExtendedNavbar>
            <S.NavbarLinkExtended to="/home">Home</S.NavbarLinkExtended>
            <S.NavbarLinkExtended to="/about">About Us</S.NavbarLinkExtended>
            <S.NavbarLinkExtended to="/contact">Contact Us</S.NavbarLinkExtended>
          </S.ExtendedNavbar>
        )}
      </S.NavbarContainer>
    </S.Header>
  );
}
