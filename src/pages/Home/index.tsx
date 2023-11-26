import { useState } from 'react';
import { PostCard } from '../../components/PostCard';
import GM1 from '../../assets/images/cards/gerencia-de-memoria/card_introducao.png';
import GM2 from '../../assets/images/cards/gerencia-de-memoria/card_alocacao_continua_simples.png';
import GM3 from '../../assets/images/cards/gerencia-de-memoria/card_overlay.png';
import GM4 from '../../assets/images/cards/gerencia-de-memoria/card_alocacao_particionada_fixa.png';
import GM5 from '../../assets/images/cards/gerencia-de-memoria/card_alocacao_particionada_estatica_absoluta.png';
import GM6 from '../../assets/images/cards/gerencia-de-memoria/card_alocacao_particionada_dinamica.png';
import GM7 from '../../assets/images/cards/gerencia-de-memoria/card_estrategias_de_alocacao_de_particao.png';
import GM8 from '../../assets/images/cards/gerencia-de-memoria/card_swapping.png';

import MV1 from '../../assets/images/cards/gerencia-de-memoria/card_introducao.png';
import MV2 from '../../assets/images/cards/gerencia-de-memoria/card_alocacao_continua_simples.png';
import MV3 from '../../assets/images/cards/gerencia-de-memoria/card_overlay.png';
import MV4 from '../../assets/images/cards/gerencia-de-memoria/card_alocacao_particionada_fixa.png';
import MV5 from '../../assets/images/cards/gerencia-de-memoria/card_alocacao_particionada_estatica_absoluta.png';
import MV6 from '../../assets/images/cards/gerencia-de-memoria/card_alocacao_particionada_dinamica.png';
import MV7 from '../../assets/images/cards/gerencia-de-memoria/card_estrategias_de_alocacao_de_particao.png';
import MV8 from '../../assets/images/cards/gerencia-de-memoria/card_swapping.png';

import * as S from './styles';

const posts = [
  {
    title: 'Introdução',
    image: GM1,
    categories: ['Gerência de Memória'],
  },
  {
    title: 'Alocação Contígua Simples',
    image: GM2,
    categories: ['Gerência de Memória'],
  },
  {
    title: 'Overlay',
    image: GM3,
    categories: ['Gerência de Memória'],
  },
  {
    title: 'Alocação Particionada Estática ou Fixa',
    image: GM4,
    categories: ['Gerência de Memória'],
  },
  {
    title: 'Alocação Particionada Estática Absoluta',
    image: GM5,
    categories: ['Gerência de Memória'],
  },
  {
    title: 'Alocação Particionada Dinâmica',
    image: GM6,
    categories: ['Gerência de Memória'],
  },
  {
    title: 'Estratégias de Alocação de Partição',
    image: GM7,
    categories: ['Gerência de Memória'],
  },
  {
    title: 'Swapping',
    image: GM8,
    categories: ['Gerência de Memória'],
  },
  {
    title: 'Memória Virtual',
    image: MV1,
    categories: ['Memória Virtual'],
  },
  {
    title: 'Memória Virtual por Paginação',
    image: MV2,
    categories: ['Memória Virtual'],
  },
  {
    title: 'Memória Virtual por Segmentação',
    image: MV3,
    categories: ['Memória Virtual'],
  },
  {
    title: 'Memória Virtual por Segmentação com Paginação',
    image: MV4,
    categories: ['Memória Virtual'],
  },
  {
    title: 'Políticas de Substituição de Páginas',
    image: MV5,
    categories: ['Memória Virtual'],
  },
  {
    title: 'Proteção de Memória',
    image: MV6,
    categories: ['Memória Virtual'],
  },
  {
    title: 'Swapping em Memória Virtual',
    image: MV7,
    categories: ['Memória Virtual'],
  },
  {
    title: 'Thrashing',
    image: MV8,
    categories: ['Memória Virtual'],
  },
];

export function HomePage() {
  const [filter, setFilter] = useState('');

  return (
    <S.Container>
      <S.Banner>
        <S.Title>Sistemas Operacionais II</S.Title>
      </S.Banner>
      <S.FilterContainer>
        <S.Filter onClick={() => setFilter('')} className={filter === '' ? 'active' : ''}>
          Todos
        </S.Filter>
        <S.Filter onClick={() => setFilter('Gerência de Memória')} className={filter === 'Gerência de Memória' ? 'active' : ''}>
          Gerência de Memória
        </S.Filter>
        <S.Filter onClick={() => setFilter('Memória Virtual')} className={filter === 'Memória Virtual' ? 'active' : ''}>
          Memória Virtual
        </S.Filter>
      </S.FilterContainer>
      <S.PostListContainer>
        <S.PostsList>
          {posts
            .filter((post) => (filter ? post.categories.includes(filter) : true))
            .map((post) => (
              <PostCard data={post} key={post.title} />
            ))}
        </S.PostsList>
      </S.PostListContainer>
    </S.Container>
  );
}
