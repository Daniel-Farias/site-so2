import * as S from './styles';
// import image from '../../assets/card_introducao.png';

interface Props {
  data: {
    title: string;
    image: any;
    categories: string[];
  };
}

export function PostCard({ data }: Props) {
  return (
    <S.Content>
      <S.Image src={data.image} alt="Post Image" />
      <S.Body>
        <S.CategoryContainer>
          {data.categories.map((category) => (
            <S.Category key={category}>{category}</S.Category>
          ))}
        </S.CategoryContainer>
        <S.Title>{data.title}</S.Title>
        <S.Footer>
          <S.Date>10/10/2021</S.Date>
        </S.Footer>
      </S.Body>
    </S.Content>
  );
}
