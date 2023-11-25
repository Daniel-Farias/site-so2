// import { useState } from 'react';
import { SideBar } from '../../components/SideBar';
import * as S from './styles';
// import { FaAngleRight, FaBars, FaXmark } from 'react-icons/fa6';
interface Props {
  children: React.ReactNode;
}

export function PostPage({ children }: Props) {
  // const [extendSideBar, setExtendSideBar] = useState(true);
  return (
    <S.Container>
      {/* <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: '100px',
        }}
      > */}
      <SideBar />
      {/* <div style={{ fontSize: '50px' }}>
          <div onClick={() => setExtendSideBar((curr) => !curr)}>{extendSideBar ? <FaXmark /> : <FaBars />}</div>
        </div> */}
      {/* <FaAngleRight />X */}
      {/* </div> */}
      <S.Content>{children}</S.Content>
    </S.Container>
  );
}
