import { PostPage } from '../../../components/PostPage';
import * as S from '../styles';

export function MemoriaVirtualIntroducao() {
  return (
    <PostPage>
      <S.PageTitle>Memória Virtual - Introdução</S.PageTitle>

      <S.Text>
        A memória virtual é uma técnica sofisticada e poderosa de gerência de memória, na qual as memórias principal e secundária
        são combinadas, proporcionando ao usuário a ilusão de existir uma memória muito maior do que a capacidade real da memória
        principal.
      </S.Text>
      <S.Text>
        O conceito de memória virtual baseia-se em desvincular o endereçamento feito pelo programa dos endereços físicos da
        memória principal. Dessa forma, Brouami e suas estruturas de dados não estão mais limitados ao tamanho da memória física
        disponivel, pois podem possuir endereços associados à memória.
      </S.Text>

      <S.List>
        <S.ListTitle>Vantagens:</S.ListTitle>
        <S.ListItem>Maior número de processos compartilhando a memória principal.</S.ListItem>
        <S.ListItem>Utilização mais eficiente do processador.</S.ListItem>
        <S.ListItem>Possibilidade de minimizar o problema da fragmentação da memória principal.</S.ListItem>
      </S.List>

      <strong>
        Por questões de desempenho, é comum que algumas funções da gerência de memória virtual sejam implementadas diretamente no
        hardware.
      </strong>

      <S.List>
        <S.ListTitle>Espaço de Endereçamento Virtual:</S.ListTitle>
        <S.ListItem>
          Um programa no ambiente de memória virtual não faz referência a endereços físicos de memória (endereços reais), mas
          apenas a endereços virtuais.
        </S.ListItem>
        <S.ListItem>
          O sistema operacional utiliza a memória secundária como extensão da memória principal. Quando um programa é executado,
          somente uma parte do seu código fica residente na memória principal, permanecendo o restante na memória secundária até o
          momento de ser referenciado.
        </S.ListItem>
      </S.List>

      <S.List>
        <S.ListTitle>Mapeamento:</S.ListTitle>
        <S.ListItem>Permite traduzir um endereço localizado no espaço virtual para um associado no espaço real.</S.ListItem>
        <S.ListItem>
          O dispositivo de hardware responsável por esta tradução é conhecido como unidade de gerência de memória (Memory
          Management Unit — MMU), sendo acionado sempre que se faz referência a um endereço virtual.
        </S.ListItem>
        <S.ListItem>
          Cada processo tem o seu espaço de endereçamento virtual como se possuísse sua própria memória. O MMU se encarrega de
          manter tabelas de mapeamento exclusivas para cada processo, relacionando os endereços virtuais do processo às suas
          posições na memória real.
        </S.ListItem>
      </S.List>
    </PostPage>
  );
}
