import { PostPage } from '../../../components/PostPage';
import { Image } from '../../../components/Image';
import { Video } from '../../../components/Video';
import Img3 from '../../../assets/images/gerencia-de-memoria/3.png';
import Img4 from '../../../assets/images/gerencia-de-memoria/4.png';
import * as S from '../styles';

export function GerenciaMemoriaAlocacaoParticionadaFixa() {
  return (
    <PostPage>
      <S.PageTitle>Alocação Particionada Estática ou Fixa</S.PageTitle>

      <S.Text>
        Nos primeiros sistemas multiprogramáveis, a memória era dividida em pedaços de tamanho fixo, chamados partições. O tamanho
        das partições, estabelecido na fase de inicialização do sistema, era definido em função do tamanho dos programas.
      </S.Text>

      <S.Text>
        A alocação particionada estática ou fixa é uma técnica que divide a memória em partições de tamanhos fixos. O número de
        partições é fixo e o tamanho de cada partição pode ou não ser o mesmo. Como é uma alocação contígua, nenhuma extensão é
        permitida.
      </S.Text>

      <S.Text>
        Aqui as partições são feitas antes da execução ou durante a configuração do sistema. O processamento do particionamento
        fixo requer menos excesso e poder computacional indireto. O uso da memória principal é ineficiente. Qualquer programa, não
        importa o quão pequeno seja, ocupa uma partição inteira. <strong>Isso pode causar fragmentação interna.</strong>
      </S.Text>

      <S.Text>
        A alocação particionada estática tem a vantagem de ser simples e fácil de implementar. No entanto, ela tem algumas
        desvantagens. Como o tamanho das partições é fixo, ela não é adequada para sistemas com muitos programas de diferentes
        tamanhos. Além disso, ela pode levar a uma fragmentação interna, onde uma partição é alocada para um programa, mas não é
        totalmente utilizada.
      </S.Text>

      <S.Text>
        A alocação particionada estática foi amplamente utilizada em sistemas operacionais primitivos, como o MS-DOS, mas hoje em
        dia é raramente usada, exceto em dispositivos muito limitados, como alguns dispositivos de internet das coisas.
      </S.Text>

      <S.MediaContainer>
        <Image
          image={Img3}
          caption="Figura 1: Alocação Particionada Fixa (Estática)"
          credit="https://unibansistemas.files.wordpress.com/2011/04/so-gerenciadememoria-apostila-07.pdf"
        />
        <Image
          image={Img4}
          caption="Figura 2: Alocação Particionada Fixa (Estática)"
          credit="https://unibansistemas.files.wordpress.com/2011/04/so-gerenciadememoria-apostila-07.pdf"
        />
      </S.MediaContainer>

      <S.Title>Videos:</S.Title>
      <S.MediaContainer>
        <Video
          src="https://www.youtube.com/embed/3g3hUv9QRd8?si=eawf8Pwt1Brn-lIl"
          caption="Me Salva Sistemas Operacionais: Alocação Contígua com Múltiplas Partições"
          credit="Youtube - Canal: Prof. Santiago - Programação e Ciência"
        />
      </S.MediaContainer>
    </PostPage>
  );
}
