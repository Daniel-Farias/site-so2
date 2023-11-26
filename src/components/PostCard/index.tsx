import { FaCalendarAlt } from 'react-icons/fa';
import * as S from './styles';

interface Props {
  data: {
    title: string;
    image: string;
    categories: string[];
    link: string;
    date: string;
  };
}

export function PostCard({ data }: Props) {
  return (
    <S.Content to={data.link}>
      <S.Image src={data.image} alt="Post Image" />
      <S.Body>
        <S.CategoryContainer>
          {data.categories.map((category) => (
            <S.Category key={category}>{category}</S.Category>
          ))}
        </S.CategoryContainer>
        <S.Title>{data.title}</S.Title>
        <S.Footer>
          <S.Date>
            {data.date} <FaCalendarAlt />
          </S.Date>
        </S.Footer>
      </S.Body>
    </S.Content>
  );
}
