import { PostPage } from '../../../components/PostPage';
import { Image } from '../../../components/Image';
import { Video } from '../../../components/Video';
import Img9 from '../../../assets/images/gerencia-de-memoria/9.png';
import Img10 from '../../../assets/images/gerencia-de-memoria/10.png';
import Img11 from '../../../assets/images/gerencia-de-memoria/11.png';
import * as S from '../styles';

export function GerenciaMemoriaEstrategiasAlocacao() {
  return (
    <PostPage>
      <S.PageTitle>Estratégias de Alocação de Partição</S.PageTitle>

      <S.Text>
        Os sistemas operacionais implementam, basicamente, três estratégias para determinar em qual área livre um programa será
        carregado para execução. Essas estratégias têm como objetivo evitar ou diminuir o problema da fragmentação externa. A
        escolha da melhor estratégia depende de diversos fatores, sendo o tamanho dos programas processados no ambiente o mais
        crucial. Independentemente do algoritmo utilizado, o sistema mantém uma lista de áreas livres, contendo o endereço e o
        tamanho de cada área.
      </S.Text>

      <S.List>
        <S.ListTitle>Best-fit</S.ListTitle>
        <S.ListItem>
          A melhor partição é escolhida, ou seja, aquela em que o programa deixa o menor espaço sem utilização.
        </S.ListItem>
        <S.ListItem>
          A lista de áreas livres está ordenada por tamanho, o que reduz o tempo de busca por uma área desocupada.
        </S.ListItem>
        <S.ListItem>
          Como a partição que deixa a menor área livre é alocada, a tendência é que a memória contenha cada vez mais pequenas
          áreas não contíguas, aumentando o problema da fragmentação.
        </S.ListItem>

        <S.MediaContainer>
          <Image image={Img9} caption="Figura 1: Estratégia Best-fit" credit="​https://slideplayer.com.br/slide/13014736/" />
        </S.MediaContainer>
      </S.List>

      <S.List>
        <S.ListTitle>Worst-fit</S.ListTitle>
        <S.ListItem>
          A pior partição é escolhida, ou seja, aquela em que o programa deixa o maior espaço sem utilização.
        </S.ListItem>
        <S.ListItem>
          A técnica de worst-fit deixa espaços livres maiores, permitindo que um maior número de programas utilize a memória e
          diminuindo o problema da fragmentação.{' '}
        </S.ListItem>

        <S.MediaContainer>
          <Image image={Img10} caption="Figura 2: Estratégia Worst-fit" credit="​​https://slideplayer.com.br/slide/13014736/" />
        </S.MediaContainer>
      </S.List>

      <S.List>
        <S.ListTitle>First-fit</S.ListTitle>
        <S.ListItem>A primeira partição livre de tamanho suficiente para carregar o programa é escolhida. </S.ListItem>
        <S.ListItem>A lista de áreas livres está ordenada por endereços crescentes. </S.ListItem>

        <S.MediaContainer>
          <Image image={Img11} caption="Figura 3: Estratégia First-fit" credit="​​https://slideplayer.com.br/slide/13014736/" />
        </S.MediaContainer>
      </S.List>

      <S.Text>Das três estratégias apresentadas, a first-fit é a mais rápida, consumindo menos recursos do sistema.</S.Text>

      <S.Title>Videos:</S.Title>
      <S.MediaContainer>
        <Video
          src="https://www.youtube.com/embed/8Bco-NvY3SY?si=wua9fjNnNDe9jDIT"
          caption="Gerência de memória: Estratégias de alocação de programas em memória principal."
          credit="Youtube - Canal: Prof. João Batista"
        />
      </S.MediaContainer>
    </PostPage>
  );
}
