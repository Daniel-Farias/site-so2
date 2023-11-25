import * as S from './styles';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  image: string;
  caption: string;
  credit: string;
}

export function Image({ image, caption, credit, ...rest }: Props) {
  return (
    <S.Container>
      <S.Image src={image} alt={caption} {...rest} />
      <S.Caption>{caption}</S.Caption>
      <S.Credit>{credit}</S.Credit>
    </S.Container>
  );
}
