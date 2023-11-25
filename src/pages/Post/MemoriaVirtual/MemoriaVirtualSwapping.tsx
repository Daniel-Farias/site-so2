import { PostPage } from '../../../components/PostPage';
import { Image } from '../../../components/Image';
import Img13 from '../../../assets/images/memoria-virtual/13.png';
import * as S from '../styles';

export function MemoriaVirtualSwapping() {
  return (
    <PostPage>
      <S.PageTitle>Swapping em Memória Virtual</S.PageTitle>

      <S.Text>
        O swapping em memória virtual utiliza a memória virtual para copiar o conteúdo da memória primária (RAM) para ou da
        memória secundária. Quando o programa precisa desses dados novamente, o sistema operacional os transfere de volta para a
        memória física. O espaço de swap geralmente é uma partição de disco dedicada usada para estender a quantidade de memória
        disponível. Se o kernel tentar acessar uma página armazenada no espaço de troca, ocorre uma falha de página, e a página é
        “swap” do disco para a RAM.
      </S.Text>

      <S.Text>
        Uma falha de página ou page fault é uma interrupção disparada pelo hardware quando um programa tenta acessar uma página
        mapeada no espaço de memória virtual, mas que não foi carregada na memória física do computador.
      </S.Text>

      <S.Text>
        No entanto, o uso excessivo de swapping consome uma grande quantidade de recursos computacionais, levando a uma degradação
        significativa no desempenho do sistema e a um aumento no tempo de resposta para as operações, pois a transferência de
        dados entre a memória física e a virtual é mais lenta do que o acesso direto à memória física. Portanto, o sistema
        operacional deve equilibrar o uso da memória física e da partição de troca para garantir o melhor desempenho possível.
      </S.Text>

      <S.MediaContainer>
        <Image
          image={Img13}
          caption="Figura 1: Swapping em Memória Virtual"
          credit="http://memoriavirtualunisc.blogspot.com/p/swapping-em-memoria-virtual.html"
        />
      </S.MediaContainer>

      <S.Title>Videos:</S.Title>
      <S.MediaContainer>
        <S.Video
          src="https://www.youtube.com/embed/wnYR1KBc9Ug?si=cn7cFXKySMxV5B9U"
          title="Me Salva Sistemas Operacionais: O que é Swapping?"
        />
      </S.MediaContainer>
    </PostPage>
  );
}
