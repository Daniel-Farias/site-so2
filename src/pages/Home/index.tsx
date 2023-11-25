import { useState } from 'react';
import { PostCard } from '../../components/PostCard';
import * as S from './styles';

const posts = [
  {
    title: 'The leading crypto trends: 4 trends to keep an eye',
    categories: ['Memória Virtual'],
  },
  {
    title: 'What is Talentum and what is our ideology',
    categories: ['Gerência de Memória'],
  },
  {
    title: 'New power tools for gig economy',
    categories: ['Memória Virtual', 'Gerência de Memória'],
  },
  {
    title: 'The leading crypto trends: 4 trends to keep an eye',
    categories: ['Memória Virtual'],
  },
  {
    title: 'What is Talentum and what is our ideology',
    categories: ['Gerência de Memória'],
  },
  {
    title: 'New power tools for gig economy',
    categories: ['Memória Virtual', 'Gerência de Memória'],
  },
];

export function HomePage() {
  const [filter, setFilter] = useState('');

  return (
    <S.Container>
      <S.Title>Sistemas Operacionais II</S.Title>
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
      <S.PostsList>
        {posts
          .filter((post) => (filter ? post.categories.includes(filter) : true))
          .map((post) => (
            <PostCard data={post} key={post.title} />
          ))}
      </S.PostsList>
    </S.Container>
  );
}
