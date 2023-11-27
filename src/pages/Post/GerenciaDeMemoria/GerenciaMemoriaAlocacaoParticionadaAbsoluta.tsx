import { PostPage } from '../../../components/PostPage';
import { Image } from '../../../components/Image';
import { Video } from '../../../components/Video';
import Img5 from '../../../assets/images/gerencia-de-memoria/5.png';
import Img6 from '../../../assets/images/gerencia-de-memoria/6.png';
import * as S from '../styles';

export function GerenciaMemoriaAlocacaoParticionadaAbsoluta() {
  return (
    <PostPage>
      <S.PageTitle>Alocação Particionada Estática Absoluta</S.PageTitle>

      <S.Text>
        Inicialmente, os programas só podiam ser carregados e executados em uma partição específica, devido ao código absoluto
        gerado pelos compiladores e montadores.
      </S.Text>

      <S.Title>Alocação Particionada Estática Relocável</S.Title>

      <S.Text>Com a evolução dos compiladores, montadores, linkers e loaders, o código gerado tornou-se relocável.</S.Text>

      <S.List>
        <S.ListItem>
          No código relocável, todas as referências a endereços no programa são relativas ao início do código, e não a endereços
          físicos de memória. (Desta forma, os programas puderam ser executados a partir de qualquer partição.)
        </S.ListItem>
        <S.ListItem>
          A proteção baseia-se em dois registradores, que indicam os limites inferior e superior da partição onde o programa está
          sendo executado.
        </S.ListItem>
      </S.List>

      <S.MediaContainer>
        <Image
          image={Img5}
          caption="Figura 1: Alocação Particionada Estática Relocável"
          credit="https://slideplayer.com.br/slide/13014736/"
        />
      </S.MediaContainer>

      <S.Text>
        Para manter o controle sobre quais partições estão alocadas, a gerência de memória mantém uma tabela com o endereço
        inicial de cada partição, seu tamanho e se está em uso. Sempre que um programa é carregado para a memória, o sistema
        percorre a tabela, na tentativa de localizar uma partição livre onde o programa possa ser carregado.
      </S.Text>

      <S.Text>
        Nesse contexto, a gerência de memória mantém uma tabela para controlar partições alocadas, facilitando o carregamento de
        programas em partições livres.
      </S.Text>

      <S.MediaContainer>
        <Image
          image={Img6}
          caption="Figura 2: Tabela de alocação de Memória"
          credit="https://slideplayer.com.br/slide/13014736/"
        />
      </S.MediaContainer>

      <S.Text>
        Ambos os sistemas de alocação absoluta e relocável enfrentam o problema da <strong>fragmentação interna</strong>, onde
        programas não preenchem totalmente as áreas alocadas, resultando em desperdício. Técnicas como compactação de memória
        buscam otimizar o uso da memória.
      </S.Text>

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
