import { useState } from 'react';
import { PostCard } from '../../components/PostCard';
import * as S from './styles';

const posts = [
  {
    title: 'The leading crypto trends: 4 trends to keep an eye',
    categories: ['UI DESIGN'],
  },
  {
    title: 'What is Talentum and what is our ideology',
    categories: ['COMPANY'],
  },
  {
    title: 'New power tools for gig economy',
    categories: ['REVIEW', 'NEWS'],
  },
];

export function HomePage() {
  const [filter, setFilter] = useState('');

  return (
    <S.Container>
      <S.Title>Sistemas Operacionais II</S.Title>
      <S.FilterContainer>
        <S.Filter onClick={() => setFilter('')} className={filter === '' ? 'active' : ''}>
          All
        </S.Filter>
        <S.Filter onClick={() => setFilter('UI DESIGN')} className={filter === 'UI DESIGN' ? 'active' : ''}>
          UI DESIGN
        </S.Filter>
        <S.Filter onClick={() => setFilter('COMPANY')} className={filter === 'COMPANY' ? 'active' : ''}>
          COMPANY
        </S.Filter>
        <S.Filter onClick={() => setFilter('REVIEW')} className={filter === 'REVIEW' ? 'active' : ''}>
          REVIEW
        </S.Filter>
        <S.Filter onClick={() => setFilter('NEWS')} className={filter === 'NEWS' ? 'active' : ''}>
          NEWS
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
