import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa6';
import { useSpring } from 'react-spring';
import LogoUESPI from '../../assets/images/UESPI_logo.png';
import * as S from './styles';

const menus = [
  {
    title: 'Gerência de Memória',
    links: [
      {
        name: 'Introdução',
        link: '/post/gerencia-de-memoria-introducao',
      },
      {
        name: 'Alocação Contígua Simples',
        link: '/post/gerencia-de-memoria-alocacao-contigua-simples',
      },
      {
        name: 'Overlay',
        link: '/post/gerencia-de-memoria-overlay',
      },
      {
        name: 'Alocação Particionada Estática',
        link: '/post/gerencia-de-memoria-alocacao-particionada-fixa',
      },
      {
        name: 'Alocação Particionada Estática Absoluta',
        link: '/post/gerencia-de-memoria-alocacao-particionada-absoluta',
      },
      {
        name: 'Alocação Particionada Dinâmica',
        link: '/post/gerencia-de-memoria-alocacao-particionada-dinamica',
      },
      {
        name: 'Estratégias de Alocação de Partição',
        link: '/post/gerencia-de-memoria-estrategias-de-alocacao',
      },
      {
        name: 'Swapping',
        link: '/post/gerencia-de-memoria-swapping',
      },
    ],
  },

  {
    title: 'Memória Virtual',
    links: [
      {
        name: 'Introdução',
        link: '/post/memoria-virtual-introducao',
      },
      {
        name: 'Memória Virtual por Paginação',
        link: '/post/memoria-virtual-paginacao',
      },
      {
        name: 'Memória Virtual por Segmentação',
        link: '/post/memoria-virtual-segmentacao',
      },
      {
        name: 'Memória Virtual por Segmentação com Paginação',
        link: '/post/memoria-virtual-segmentacao-com-paginacao',
      },
      {
        name: 'Políticas de Substituição de Páginas',
        link: '/post/memoria-virtual-politicas-de-substituição-paginas',
      },
      {
        name: 'Proteção de Memória',
        link: '/post/memoria-virtual-protecao-de-memoria',
      },
      {
        name: 'Swapping em Memória Virtual',
        link: '/post/memoria-virtual-swapping',
      },
      {
        name: 'Thrashing',
        link: '/post/memoria-virtual-thrashing',
      },
    ],
  },
  {
    title: 'Referências',
    links: [
      {
        name: 'Lista de Referências',
        link: '/referencias',
      },
    ],
  },
];

export function SideBar() {
  const location = useLocation();
  const [extendSideBar, setExtendSideBar] = useState(window.innerWidth >= 700);
  const [sidebarTop, setSidebarTop] = useState(0);

  const springStyles = useSpring({
    marginTop: sidebarTop,
    config: { tension: 200, friction: 20 },
  });

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('.footer') as HTMLElement;
      if (window.pageYOffset + window.innerHeight <= footer.offsetTop) {
        setSidebarTop(window.pageYOffset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => setExtendSideBar(window.innerWidth >= 700);
    window.addEventListener('resize', handleResize);
  }, [window.innerWidth]);

  return (
    <S.SideBarArea open={extendSideBar} style={springStyles} className="sidebar">
      <S.Container open={extendSideBar}>
        <S.LogoContainer>
          <S.Logo src={LogoUESPI} />
          <S.LogoText>Universidade Estadual do Piauí</S.LogoText>
          <S.LogoText>BCC - BLOCO 06 - 2023</S.LogoText>
        </S.LogoContainer>
        {menus.map((menu) => (
          <S.Menu key={menu.title}>
            <S.Title>{menu.title}</S.Title>
            <S.ItemsContainer>
              {menu.links.map((item) => (
                <S.Item className={location.pathname === item.link ? 'active' : ''} key={item.link}>
                  <Link className={location.pathname === item.link ? 'active' : ''} to={item.link}>
                    {item.name}
                  </Link>
                </S.Item>
              ))}
            </S.ItemsContainer>
          </S.Menu>
        ))}
      </S.Container>
      <S.SideBarToggle onClick={() => setExtendSideBar((curr) => !curr)}>
        {extendSideBar ? <FaAngleLeft /> : <FaAngleRight />}
      </S.SideBarToggle>
    </S.SideBarArea>
  );
}
