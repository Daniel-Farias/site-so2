import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaChevronCircleLeft } from 'react-icons/fa';
import logo from '../../assets/images/UESPI_logo.png';
import * as S from './styles';

export function NavBar() {
  const location = useLocation();
  const [extendNavbar, setExtendNavbar] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setExtendNavbar(false);
  };

  return (
    <S.Header>
      <S.NavbarContainer open={extendNavbar}>
        {location.pathname === '/' ? (
          <S.Img src={logo} alt="UESPI" />
        ) : (
          <S.BackButton to="/">
            <FaChevronCircleLeft />
          </S.BackButton>
        )}
        <S.NavbarLinkContainer>
          <S.NavbarLink to="/" onClick={scrollToTop}>
            Home
          </S.NavbarLink>
          <S.NavbarLink to="/contact">Gerência de Memória</S.NavbarLink>
          <S.NavbarLink to="/post/memoria-virtual-introducao">Memória Virtual</S.NavbarLink>
          <S.Anchor href="#help">Ajuda</S.Anchor>
          <S.ButtonLink onClick={() => setExtendNavbar((curr) => !curr)}>
            {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
          </S.ButtonLink>
        </S.NavbarLinkContainer>
        {extendNavbar && (
          <S.ExtendedNavbar>
            <S.NavbarLinkExtended to="/home">Home</S.NavbarLinkExtended>
            <S.NavbarLinkExtended to="/about">About Us</S.NavbarLinkExtended>
            <S.NavbarLinkExtended to="/contact">Contact Us</S.NavbarLinkExtended>
            <S.AnchorLinkExtended href="#help">Ajuda</S.AnchorLinkExtended>
          </S.ExtendedNavbar>
        )}
      </S.NavbarContainer>
    </S.Header>
  );
}
