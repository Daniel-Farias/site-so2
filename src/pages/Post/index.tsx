import { useParams } from 'react-router-dom';
import * as S from './styles';

export function PostPage() {
  const { slug } = useParams();

  return (
    <S.Container>
      <h1>Post Page - {slug}</h1>
    </S.Container>
  );
}
