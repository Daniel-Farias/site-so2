import { PostPage } from '../../../components/PostPage';
import { Image } from '../../../components/Image';
import Img1 from '../../../assets/images/gerencia-de-memoria/1.png';
import * as S from '../styles';

export function GerenciaMemoriaAlocacaoContiguaSimples() {
  return (
    <PostPage>
      <S.PageTitle>Alocação Contígua Simples</S.PageTitle>

      <S.Text>
        A alocação contígua simples é a técnica mais simples de alocação de memória. Nessa técnica, o sistema operacional aloca o
        programa em uma única região contígua de memória principal. Essa região contígua é alocada na memória principal, de forma
        que o programa possa ser executado.
      </S.Text>

      <S.Text>
        Os sistemas monoprogramáveis alocam exclusivamente o Sistema Computacional para um único programa. Isso significa que o
        programa tem todos os dispositivos, incluindo periféricos, memória e processador disponíveis durante toda a sua execução,
        mesmo quando não está ativo.
      </S.Text>

      <S.Text>
        Embora seja de fácil implementação, a alocação contígua simples não permite a utilização eficiente dos recursos
        computacionais, já que apenas um usuário pode dispor desses recursos.
      </S.Text>

      <S.MediaContainer>
        <Image image={Img1} caption="Figura 1: Alocação Contígua Simples" credit="https://slideplayer.com.br/slide/13014736/" />
      </S.MediaContainer>

      <S.Title>Videos:</S.Title>
      <S.MediaContainer>
        <S.Video src="https://www.youtube.com/embed/3pycQqgswAg?si=xC99UiWT6HRQyBzr" title="Alocação Contígua Simples" />
      </S.MediaContainer>
    </PostPage>
  );
}
