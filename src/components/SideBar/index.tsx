import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa6';
import { useSpring } from 'react-spring';
import LogoUESPI from '../../assets/images/UESPI_logo.png';
import * as S from './styles';

export function SideBar() {
  const [extendSideBar, setExtendSideBar] = useState(true);
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
    <S.SideBarArea extend={extendSideBar} style={springStyles} className="sidebar">
      <S.Container extend={extendSideBar}>
        <S.LogoContainer>
          <S.Logo src={LogoUESPI} />
          <S.LogoText>Universidade Estadual do Piauí</S.LogoText>
          <S.LogoText>BCC - BLOCO 06 - 2023</S.LogoText>
        </S.LogoContainer>
        <S.Menu>
          <S.Title>Gerência de Memória</S.Title>
          <S.ItemsContainer>
            <S.Item>
              <Link to="/post/gerencia-de-memoria-introducao">Introdução</Link>
            </S.Item>
            <S.Item>
              <Link to="/post/gerencia-de-memoria-alocacao-contigua-simples">Alocação Contígua Simples</Link>
            </S.Item>
            <S.Item>
              <Link to="/post/gerencia-de-memoria-overlay">Overlay</Link>
            </S.Item>
            <S.Item>
              <Link to="/post/gerencia-de-memoria-alocacao-particionada-fixa">Alocação Particionada Estática</Link>
            </S.Item>
            <S.Item>
              <Link to="/post/gerencia-de-memoria-alocacao-particionada-absoluta">Alocação Particionada Estática Absoluta</Link>
            </S.Item>
            <S.Item>
              <Link to="/post/gerencia-de-memoria-alocacao-particionada-dinamica">Alocação Particionada Dinâmica</Link>
            </S.Item>
            <S.Item>
              <Link to="/post/gerencia-de-memoria-estrategias-de-alocacao">Estratégias de Alocação de Partição</Link>
            </S.Item>
            <S.Item>
              <Link to="/post/gerencia-de-memoria-swapping">Swapping</Link>
            </S.Item>
          </S.ItemsContainer>
        </S.Menu>
        <S.Menu>
          <S.Title>Mermória Virtual</S.Title>
          <S.ItemsContainer>
            <S.Item>
              <Link to="/post/memoria-virtual-introducao">Introdução</Link>
            </S.Item>
            <S.Item>
              <Link to="/post/memoria-virtual-paginacao">Memória Virtual por Paginação</Link>
            </S.Item>
            <S.Item>
              <Link to="/post/memoria-virtual-segmentacao">Memória Virtual por Segmentação</Link>
            </S.Item>
            <S.Item>
              <Link to="/post/memoria-virtual-segmentacao-com-paginacao">Memória Virtual por Segmentação com Paginação</Link>
            </S.Item>
            <S.Item>
              <Link to="/post/memoria-virtual-politicas-de-substituição-paginas">Políticas de Substituição de Páginas</Link>
            </S.Item>
            <S.Item>
              <Link to="/post/memoria-virtual-protecao-de-memoria">Proteção de Memória</Link>
            </S.Item>
            <S.Item>
              <Link to="/post/memoria-virtual-swapping">Swapping em Memória Virtual</Link>
            </S.Item>
            <S.Item>
              <Link to="/post/memoria-virtual-thrashing">Thrashing</Link>
            </S.Item>
          </S.ItemsContainer>
        </S.Menu>
        <S.Menu>
          <S.Title>Referências</S.Title>
          <S.ItemsContainer>
            <S.Item>
              <Link to="/referencias">Lista de Referências</Link>
            </S.Item>
          </S.ItemsContainer>
        </S.Menu>
      </S.Container>
      <S.SideBarToggle onClick={() => setExtendSideBar((curr) => !curr)}>
        {extendSideBar ? <FaAngleLeft /> : <FaAngleRight />}
      </S.SideBarToggle>
    </S.SideBarArea>
  );
}
