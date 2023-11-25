import { Link } from 'react-router-dom';
import LogoUESPI from '../../assets/images/UESPI_logo.png';
import * as S from './styles';

export function SideBar() {
  return (
    <S.Container>
      <S.LogoContainer>
        <S.Logo src={LogoUESPI} />
        <S.LogoText>Universidade Estadual do Piauí</S.LogoText>
        <S.LogoText>BCC - BLOCO 06 - 2023</S.LogoText>
      </S.LogoContainer>
      <S.Menu>
        <S.Title>Gerência de Memória</S.Title>
        <S.ItemsContainer>
          <S.Item>
            <Link to="/post/">Introdução</Link>
          </S.Item>
          <S.Item>
            <Link to="/post/">Alocação Contígua Simples</Link>
          </S.Item>
          <S.Item>
            <Link to="/post/">Overlay</Link>
          </S.Item>
          <S.Item>
            <Link to="/post/">Alocação Particionada Estática</Link>
          </S.Item>
          <S.Item>
            <Link to="/post/">Alocação Particionada Estática Absoluta</Link>
          </S.Item>
          <S.Item>
            <Link to="/post/">Alocação Particionada Dinâmica</Link>
          </S.Item>
          <S.Item>
            <Link to="/post/">Estratégias de Alocação de Partição</Link>
          </S.Item>
          <S.Item>
            <Link to="/post/">Swapping</Link>
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
    </S.Container>
  );
}
