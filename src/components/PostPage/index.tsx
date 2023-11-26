import { SideBar } from '../../components/SideBar';
import * as S from './styles';

interface Props {
  children: React.ReactNode;
}

export function PostPage({ children }: Props) {
  return (
    <S.Container>
      <SideBar />
      <S.Content>{children}</S.Content>
    </S.Container>
  );
}
