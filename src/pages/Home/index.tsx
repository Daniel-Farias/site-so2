import { useState } from 'react';
import { PostCard } from '../../components/PostCard';
import { posts } from '../../data/posts';
import * as S from './styles';

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
