import * as S from './styles';

interface Props extends React.IframeHTMLAttributes<HTMLIFrameElement> {
  src: string;
  caption: string;
  credit: string;
}

export function Video({ src, caption, credit, ...rest }: Props) {
  return (
    <S.Container>
      <S.Iframe src={src} {...rest} />
      <S.Caption>{caption}</S.Caption>
      <S.Credit>Fonte: {credit}</S.Credit>
    </S.Container>
  );
}
