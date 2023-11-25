import { PostPage } from '../../../components/PostPage';
import { Image } from '../../../components/Image';
import Img4 from '../../../assets/images/memoria-virtual/4.png';
import * as S from '../styles';

export function MemoriaVirtualPaginacao() {
  return (
    <PostPage>
      <S.PageTitle>Memória Virtual por Paginação</S.PageTitle>

      <S.Text>
        A memória virtual por paginação é uma técnica de gerência de memória em que o espaço de endereçamento virtual e o espaço
        de endereçamento real são divididos em blocos de mesmo tamanho chamados páginas. Essa abordagem oferece benefícios que
        permitem que um programa e seus dados ultrapassem os limites da memória principal, possibilitando um maior número de
        processos compartilhando a memória principal e minimizando o problema da fragmentação.
      </S.Text>

      <S.Title>Políticas de Busca de Páginas</S.Title>

      <S.List>
        <S.ListTitle>MMU (Memory Management Unit):</S.ListTitle>
        <S.ListItem>
          Permite a execução de um programa sem que seu código esteja completamente residente na memória principal.
        </S.ListItem>
        <S.ListItem>A política de busca determina quando uma página deve ser carregada.</S.ListItem>
        <S.ListItem>Caso a página não seja carregada na memória principal, ocorre uma falta de página (page fault).</S.ListItem>
      </S.List>

      <S.List>
        <S.ListTitle>Paginação por Demanda:</S.ListTitle>
        <S.ListItem>Páginas são transferidas da memória secundária para a principal quando referenciadas.</S.ListItem>
        <S.ListItem>É possível que partes não executadas do programa nunca sejam carregadas.</S.ListItem>
        <S.ListItem>É otimizado em termos de uso de memória.</S.ListItem>
      </S.List>

      <S.List>
        <S.ListTitle>Paginação Antecipada:</S.ListTitle>
        <S.ListItem>Além da página referenciada, carrega páginas que podem ou não ser necessárias.</S.ListItem>
        <S.ListItem>Pode causar perda de tempo e desperdiçar a memória.</S.ListItem>
      </S.List>

      <S.Title>Políticas de Alocação de Páginas</S.Title>
      <S.Text>
        Na alocação estática, determina-se quantos frames cada processo pode manter na memória principal. Na alocação variável ou
        dinâmica, o número máximo de páginas reais alocadas ao processo varia durante sua execução.
      </S.Text>

      <S.List>
        <S.ListTitle>Estática:</S.ListTitle>
        <S.ListItem>
          Cada processo tem um número máximo de páginas reais, definido quando o processo é criado. Simplicidade na implementação.
        </S.ListItem>
        <S.ListItem>
          Um número muito pequeno de páginas reais pode causar muita paginação (troca de páginas da memória principal).
        </S.ListItem>
        <S.ListItem>Um número muito grande de páginas reais causa desperdício de memória principal.</S.ListItem>
      </S.List>

      <S.List>
        <S.ListTitle>Dinâmica:</S.ListTitle>
        <S.ListItem>Processos com elevada taxa de paginação podem ter seu limite de páginas reais ampliado.</S.ListItem>
        <S.ListItem>Processos com baixa taxa de paginação podem ter seu limite de páginas reais reduzido.</S.ListItem>
      </S.List>

      <S.MediaContainer>
        <Image
          image={Img4}
          caption="Figura 1: Memória virtual por paginação"
          credit="https://www.slideserve.com/ovid/sistemas-operacionais"
        />
      </S.MediaContainer>

      <S.Title>Videos:</S.Title>
      <S.MediaContainer>
        <S.Video src="https://www.youtube.com/embed/0QxMvORmUFc?si=4sdGXnwlsKYJub4U" title="Paginação" />
        <S.Video
          src="https://www.youtube.com/embed/4EaBN98dk40?si=pvOYa8-QQ0Ww_GNu"
          title="Sistemas Operacionais - Aula 19 - Paginação"
        />
      </S.MediaContainer>
    </PostPage>
  );
}
