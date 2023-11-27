import { PostPage } from '../../../components/PostPage';
import { Video } from '../../../components/Video';
import * as S from '../styles';

export function GerenciaMemoriaIntroducao() {
  return (
    <PostPage>
      <S.PageTitle>Gerência de Memória - Introdução</S.PageTitle>

      <S.Text>
        O gerenciamento de memória, em conjunto com o gerenciamento de processos, forma o que se pode chamar de coração de um
        sistema operacional. Sua importância reside fundamentalmente no fato do processador executar instruções trazidas da
        memória, sobre dados trazidos da memória e guardando resultados na memória. Assim, passa a ser crucial o gerenciamento de
        como a memória estará ocupada e como as informações nela serão reconhecidas pelo processador.
      </S.Text>

      <S.Text>
        O mesmo se ocupa da memória principal e das suas interações com cache e memória secundária. Desse modo, o gerenciamento de
        memória se ocupa fundamentalmente do controle de quais dados vão para a memória, de que forma são armazenados nela e como
        podem ser acessados.
      </S.Text>

      <S.Text>
        Isso envolve atividades de endereçamento, em que se mapeia endereços de disco para endereços de memória, de alocação, em
        que se determina quais espaços serão ocupados por quem, e de memória virtual, em que se amplia o conceito de memória
        principal para um tamanho infinito.
      </S.Text>

      <S.List>
        <S.ListTitle>Funções que o gerenciamento de memória desempenha:</S.ListTitle>
        <S.ListItem>Maximizar o número de processos na memória.</S.ListItem>
        <S.ListItem>Permitir a execução de programas maiores que a memória física disponível.</S.ListItem>
        <S.ListItem>Proteger a memória utilizada por cada processo e pelo sistema operacional.</S.ListItem>
        <S.ListItem>Compartilhar dados na memória entre processos.</S.ListItem>
        <S.ListItem>Atende a requisições de aumento de memória.</S.ListItem>
        <S.ListItem>Mantém o mapeamento de memória virtual para memória física.</S.ListItem>
        <S.ListItem>Faz o swapping transparente entre memória principal e disco.</S.ListItem>
        <S.ListItem>Mantém o registro das áreas de memória em uso.</S.ListItem>
      </S.List>

      <S.Title>Videos:</S.Title>
      <S.MediaContainer>
        <Video
          src="https://www.youtube.com/embed/Q8ZqjEafmNc?si=5qEu9dyEhySIE2uN"
          caption="Sistemas Operacionais - Aula 17 - Introdução ao Gerenciamento de Memória"
          credit="Youtube - Canal: UNIVESP"
        />
      </S.MediaContainer>
    </PostPage>
  );
}
