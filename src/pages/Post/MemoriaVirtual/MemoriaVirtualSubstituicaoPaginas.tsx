import { PostPage } from '../../../components/PostPage';
import { Image } from '../../../components/Image';
import { Video } from '../../../components/Video';
import Img8 from '../../../assets/images/memoria-virtual/8.png';
import Img9 from '../../../assets/images/memoria-virtual/9.png';
import Img10 from '../../../assets/images/memoria-virtual/10.png';
import * as S from '../styles';

export function MemoriaVirtualSubstituicaoPaginas() {
  return (
    <PostPage>
      <S.PageTitle>Políticas de Substituição de Páginas</S.PageTitle>

      <S.Text>
        Essas políticas têm como objetivo reduzir as faltas de páginas (page fault) através de uma operação de entrada/saída em
        páginas que serão substituídas em breve. Quando chegar o momento de a página ser substituída, ela já terá sido limpa. A
        qualidade do algoritmo de paginação é determinada pelo tempo gasto com as recargas de páginas, quanto menos tempo, mais
        eficiente e melhor é o algoritmo.
      </S.Text>

      <S.List>
        <S.ListTitle>Algoritmo Ótimo:</S.ListTitle>
        <S.ListItem>Apresenta uma taxa mínima de falta de páginas.</S.ListItem>
        <S.ListItem>Mantém em memória as páginas que serão referenciadas.</S.ListItem>
        <S.ListItem>Retira as páginas que serão referenciadas em um futuro muito distante.</S.ListItem>
        <S.ListItem>
          <strong>
            Não é possível implementar esse algoritmo, pois não é possível prever o futuro e saber quais páginas serão
            referenciadas.
          </strong>
        </S.ListItem>
      </S.List>

      <S.List>
        <S.ListTitle>FIFO (First-In-First-Out):</S.ListTitle>
        <S.ListItem>Substitui a página mais antiga na memória.</S.ListItem>
        <S.ListItem>A página no início da lista é a mais antiga, e a página no final da lista é a mais nova.</S.ListItem>
        <S.ListItem>Implementação simples.</S.ListItem>
        <S.ListItem>A página em uso constante pode ser retirada.</S.ListItem>
      </S.List>

      <S.MediaContainer>
        <Image
          image={Img8}
          caption="Figura 1: Algoritmo FIFO (First-In First-Out)"
          credit="https://prepinstadotcom.s3.ap-south-1.amazonaws.com/wp-content/uploads/2021/05/Custom-Size-%E2%80%93-104.webp"
        />
      </S.MediaContainer>

      <S.List>
        <S.ListTitle>LFU (Least-Frequently-Used)</S.ListTitle>
        <S.ListItem>O sistema registra o número de vezes que um bloco é referenciado na memória.</S.ListItem>
        <S.ListItem>O item com a frequência de referência mais baixa é removido.</S.ListItem>
        <S.ListItem>Pode retirar páginas que estão sendo referenciadas com frequência.</S.ListItem>
      </S.List>

      <S.MediaContainer>
        <Image
          image={Img9}
          caption="Figura 2: Algoritmo LFU (Least Frequently Used)"
          credit="https://www.youtube.com/watch?v=f-5-tJlkSXY"
        />
      </S.MediaContainer>

      <S.List>
        <S.ListTitle>LRU (Least-Recently-Used)</S.ListTitle>
        <S.ListItem>Troca a página menos referenciada/modificada recentemente.</S.ListItem>
        <S.ListItem>Alto custo.</S.ListItem>
        <S.ListItem>
          Lista encadeada com as páginas que estão na memória, com as mais recentemente utilizadas no início e as menos utilizadas
          no final.
        </S.ListItem>
        <S.ListItem>A lista deve ser atualizada a cada referência da memória.</S.ListItem>
        <S.ListItem>Desempenho.</S.ListItem>
        <S.ListItem>quando o padrão de acesso é sequencial (vetor, lista e árvore).</S.ListItem>
      </S.List>

      <S.MediaContainer>
        <Image
          image={Img10}
          caption="Figura 3: Algoritmo LRU (Least Recently Used)"
          credit="https://www.youtube.com/watch?v=f-5-tJlkSXY"
        />
      </S.MediaContainer>

      <S.Title>Videos:</S.Title>
      <S.MediaContainer>
        <Video
          src="https://www.youtube.com/embed/j6RMVMUxYmc?si=zlJpoVEKdC6cMXKs"
          caption="Sistemas Operacionais - Aula 20 - Algoritmos de Substituição de Páginas"
          credit="Youtube - Canal: UNIVESP"
        />
        <Video
          src="https://www.youtube.com/embed/f-5-tJlkSXY?si=FvJNeucCveGmWaft"
          caption="Algoritmos de Substituição de Cache - FIFO, LRU, LFU e Aleatório"
          credit="Youtube - Canal: DesCOMPlica, Oliba!"
        />
      </S.MediaContainer>
    </PostPage>
  );
}
