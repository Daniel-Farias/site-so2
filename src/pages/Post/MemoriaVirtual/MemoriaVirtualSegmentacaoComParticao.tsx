import { PostPage } from '../../../components/PostPage';
import { Image } from '../../../components/Image';
import Img7 from '../../../assets/images/memoria-virtual/7.png';
import * as S from '../styles';

export function MemoriaVirtualSegmentacaoComParticao() {
  return (
    <PostPage>
      <S.PageTitle>Memória Virtual por Segmentação com Partição</S.PageTitle>

      <S.Text>
        A técnica de gerência de memória por segmentação com paginação divide o espaço de endereçamento em segmentos, e cada
        segmento é subdividido em páginas. Essa abordagem visa combinar as vantagens tanto da técnica de paginação quanto da
        técnica de segmentação.
      </S.Text>

      <S.List>
        <S.ListItem>
          Nesse esquema, um endereço virtual é formado pelo número do segmento virtual (NSV), um número de página virtual (NPV), e
          um deslocamento.
        </S.ListItem>
        <S.ListItem>
          Através do NSV, obtém-se uma entrada na tabela de segmentos, que contém informações da tabela de páginas do segmento.
        </S.ListItem>
        <S.ListItem>
          O NPV identifica unicamente a página virtual que contém o endereço, funcionando como um índice na tabela de páginas.
        </S.ListItem>
      </S.List>

      <S.MediaContainer>
        <Image
          image={Img7}
          caption="Figura 1: Memória Virtual por Segmentação com Paginação"
          credit="https://slideplayer.com.br/slide/345659/2/images/37/Mem%C3%B3ria+Virtual+por+Segmenta%C3%A7%C3%A3o+com+Pagina%C3%A7%C3%A3o.jpg"
        />
      </S.MediaContainer>

      <S.Text>
        O deslocamento indica a posição do endereço virtual em relação ao início da página em que se encontra. O endereço físico é
        obtido combinando o endereço do frame, localizado na tabela de páginas, com o deslocamento contido no endereço virtual.
      </S.Text>

      <S.Text>
        Na visão do programador, sua aplicação continua sendo mapeada em segmentos de tamanhos diferentes, conforme as sub-rotinas
        e estruturas de dados definidas no programa.
      </S.Text>

      <S.Text>
        Por outro lado, o sistema trata cada segmento como um conjunto de páginas de mesmo tamanho, mapeadas por uma tabela de
        páginas associada ao segmento. Dessa forma, um segmento não precisa estar contíguo na memória principal, diminuindo o
        problema da fragmentação externa encontrado na segmentação pura.
      </S.Text>

      <S.Title>Videos:</S.Title>
      <S.MediaContainer>
        <S.Video
          src="https://www.youtube.com/embed/TB19DZBVWRw?si=s27lafYodPLKkXI6"
          title="Segmentação e Segmentação com Paginação"
        />
      </S.MediaContainer>
    </PostPage>
  );
}
