import { PostPage } from '../../../components/PostPage';
import { Image } from '../../../components/Image';
import Img12 from '../../../assets/images/gerencia-de-memoria/12.png';
import * as S from '../styles';

export function GerenciaMemoriaSwapping() {
  return (
    <PostPage>
      <S.PageTitle>Swapping</S.PageTitle>

      <S.Text>
        A técnica de swapping foi introduzida para dar maior taxa de utilização à memória principal, melhorando seu
        compartilhamento. Visa também resolver o problema da falta de memória principal num sistema.
      </S.Text>

      <S.Text>
        Toda vez que um programa precisa ser alocado para execução e não há espaço na memória principal, o sistema operacional
        escolhe entre os processos alocados que não tem previsão de utilizar a CPU nos próximos instantes (quase sempre entre
        aqueles que estão em interrupção de E/S ou no final da fila de pronto), e “descarrega” este processo da memória para uma
        área especial em disco(essa transferência é chamada de swap out), chamada arquivo de swap, onde o processo fica armazenado
        temporariamente.
      </S.Text>

      <S.Text>
        Durante o tempo em que o processo fica em swap, o outro que necessitava de memória entra em execução ocupando o espaço
        deixado pelo que saiu(swap in). Pouco antes de chegar a vez do processo armazenado em swap utilizar a CPU, o sistema
        escolhe um outro processo para descarregar para swap e devolve o anterior da área de swap para a memória principal, para
        que este possa ser executado novamente. E vai trabalhando assim até que os processos vão terminando. O problema dessa
        técnica é que pode provocar um número excessivo de acesso à memória secundária (disco), levando o sistema a uma queda de
        desempenho.
      </S.Text>

      <S.MediaContainer>
        <Image image={Img12} caption="Figura 1: Swapping" credit="https://slideplayer.com.br/slide/13014736/" />
      </S.MediaContainer>

      <S.List>
        <S.ListTitle>Principais características:</S.ListTitle>
        <S.ListItem>
          Vantagem: permite um maior compartilhamento da memória principal e, consequentemente, uma maior utilização dos recursos
          do sistema computacional.
        </S.ListItem>
        <S.ListItem>Desvantagem: Seu maior problema é o elevado custo das operações de entrada/saída (swap in/out).</S.ListItem>
        <S.ListItem>
          Em momentos em que há pouca memória disponível, o sistema pode ficar quase que dedicado à realização de swapping,
          deixando de executar outras tarefas e impedindo a execução dos demais processos residentes.
        </S.ListItem>
      </S.List>

      <S.Title>Videos:</S.Title>
      <S.MediaContainer>
        <S.Video
          src="https://www.youtube.com/embed/wnYR1KBc9Ug?si=dbpJi6gPV86Q7XOj"
          title="Me Salva Sistemas Operacionais: O que é Swapping?"
        />
      </S.MediaContainer>
    </PostPage>
  );
}
