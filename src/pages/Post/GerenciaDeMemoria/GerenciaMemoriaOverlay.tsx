import { PostPage } from '../../../components/PostPage';
import { Image } from '../../../components/Image';
import Img2 from '../../../assets/images/gerencia-de-memoria/2.png';
import * as S from '../styles';

export function GerenciaMemoriaOverlay() {
  return (
    <PostPage>
      <S.PageTitle>Overlay</S.PageTitle>

      <S.Text>
        Quando o espaço de memória não é suficiente para armazenar todo o programa, a técnica de overlay é empregada. Essa técnica
        utiliza uma área de memória compartilhada, chamada de área de overlay, onde os módulos podem ocupar o mesmo espaço. A
        técnica de overlay foi amplamente utilizada em sistemas operacionais primitivos, como o MS-DOS, mas hoje em dia é
        raramente usada, exceto em dispositivos muito limitados, como alguns dispositivos de internet das coisas.
      </S.Text>

      <S.Text>
        A construção de um overlay envolve dividir manualmente um programa em blocos de código objeto independentes, chamados de
        overlays, dispostos em uma estrutura de árvore.
      </S.Text>

      <S.List>
        <S.ListTitle>Principais características:</S.ListTitle>
        <S.ListItem>Divisão do programa em módulos para permitir a execução independente.</S.ListItem>
        <S.ListItem>Utilização de uma mesma área de memória para compartilhar módulos.</S.ListItem>
        <S.ListItem>Expansão dos limites da memória principal.</S.ListItem>
      </S.List>

      <S.Text>
        A técnica de overlay tem a vantagem de permitir ao programador expandir os limites da memória principal. A utilização
        dessa técnica exige muito cuidado, pois pode trazer implicações tanto na sua manutenção quanto no desempenho das
        aplicações devido à possibilidade de transferência excessiva dos módulos entre a memória principal e a secundária.
      </S.Text>

      <S.MediaContainer>
        <Image
          image={Img2}
          caption="Figura 1: Técnia de Overlay"
          credit="https://unibansistemas.files.wordpress.com/2011/04/so-gerenciadememoria-apostila-07.pdf"
        />
      </S.MediaContainer>
    </PostPage>
  );
}
