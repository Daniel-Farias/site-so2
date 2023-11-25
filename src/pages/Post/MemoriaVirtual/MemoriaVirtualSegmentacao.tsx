import { PostPage } from '../../../components/PostPage';
import { Image } from '../../../components/Image';
import Img5 from '../../../assets/images/memoria-virtual/5.png';
import Img6 from '../../../assets/images/memoria-virtual/6.png';
import * as S from '../styles';

export function MemoriaVirtualSegmentacao() {
  return (
    <PostPage>
      <S.PageTitle>Memória Virtual por Segmentação</S.PageTitle>

      <S.Text>
        A memória virtual por segmentação é uma técnica de gerência de memória onde o espaço de endereçamento virtual é dividido
        em blocos de tamanhos diferentes chamados segmentos. Nessa abordagem, um programa é dividido logicamente em sub-rotinas e
        estruturas de dados, alocadas em segmentos na memória principal. Em comparação com a técnica de paginação, onde o programa
        é dividido em páginas de tamanho fixo sem relação com sua estrutura, a segmentação estabelece uma ligação entre a lógica
        do programa e sua alocação na memória principal.
      </S.Text>

      <S.Text>
        A definição dos segmentos é geralmente realizada pelo compilador a partir do código-fonte do programa. Cada segmento pode
        representar um procedimento, função, vetor ou pilha. O espaço de endereçamento virtual de um processo tem um número máximo
        de segmentos que podem existir, e cada segmento pode variar de tamanho dentro de um limite. O tamanho do segmento pode ser
        alterado durante a execução do programa, facilitando a implementação de estruturas de dados dinâmicas. Espaços de
        endereçamento independentes permitem que uma sub-rotina seja alterada sem a necessidade de recompilar e religar o programa
        principal e todas as suas sub-rotinas.
      </S.Text>

      <S.Text>
        O mecanismo de mapeamento é semelhante ao de paginação. Os segmentos são mapeados por meio de tabelas de mapeamento de
        segmentos (TMS), e os endereços são compostos pelo número do segmento virtual (NSV) e por um deslocamento. O NSV
        identifica unicamente o segmento virtual que contém o endereço, funcionando como um índice na TMS. O deslocamento indica a
        posição do endereço virtual em relação ao início do segmento no qual se encontra. O endereço físico é obtido combinando o
        endereço do segmento, localizado na TMS, com o deslocamento contido no endereço virtual.
      </S.Text>

      <S.MediaContainer>
        <Image
          image={Img5}
          caption="Figura 1: Memória virtual por segmentação"
          credit="http://memoriavirtualunisc.blogspot.com/p/tipos-de-memoria-virtual.html"
        />
      </S.MediaContainer>

      <S.Text>
        Na visão do programador, a aplicação continua sendo mapeada em segmentos de tamanhos diferentes, conforme as sub-rotinas e
        estruturas de dados definidas no programa. Por outro lado, o sistema trata cada segmento como um conjunto de páginas de
        mesmo tamanho, mapeadas por uma tabela de páginas associada ao segmento. Dessa forma, um segmento não precisa estar
        contíguo na memória principal, reduzindo o problema da fragmentação externa encontrado na segmentação pura.
      </S.Text>

      <S.MediaContainer>
        <Image
          image={Img6}
          caption="Figura 2: Memória Virtual por Segmentação"
          credit="https://slideplayer.com.br/slide/345659/"
        />
      </S.MediaContainer>

      <S.Title>Videos:</S.Title>
      <S.MediaContainer>
        <S.Video
          src="https://www.youtube.com/embed/I4KWhoNc_Q8?si=NOcT-7hujlDxD8K2"
          title="Memória Virtual - Segmentação e Paginação."
        />
      </S.MediaContainer>
    </PostPage>
  );
}
