import { PostPage } from '../../../components/PostPage';
import { Image } from '../../../components/Image';
import Img11 from '../../../assets/images/memoria-virtual/11.png';
import Img12 from '../../../assets/images/memoria-virtual/12.png';
import * as S from '../styles';

export function MemoriaVirtualProtecaoMemoria() {
  return (
    <PostPage>
      <S.PageTitle>Proteção de Memória</S.PageTitle>

      <S.Text>
        A proteção de memória são os mecanismos que possuem o objetivo de preservar as áreas de memória do sistema operacional
        contra os processos e programas dos usuários. Caso não se tenha autorização, o sistema operacional deve bloquear o acesso
        ou a modificação de uma página, pois uma alteração indevida pode causar instabilidade no funcionamento do sistema ou sua
        parada total.
      </S.Text>

      <S.Text>
        No primeiro nível de proteção, encontramos o próprio mecanismo de memória virtual por paginação. Nessa estrutura, cada
        processo possui sua própria tabela de mapeamento, e o sistema realiza a tradução dos endereços. Com isso, é impossível um
        processo acessar uma área de memória de outro processo, a não ser que haja um compartilhamento explícito de páginas entre
        esses processos. A proteção de acesso é feita por cada página física de maneira individual, usando as entradas das tabelas
        de mapeamento, onde se encontram bits que especificam os acessos permitidos.
      </S.Text>

      <S.MediaContainer>
        <Image
          image={Img11}
          caption="Figura 1: Proteção de memória"
          credit="http://memoriavirtualunisc.blogspot.com/p/tipos-de-memoria-virtual.html"
        />
      </S.MediaContainer>

      <S.Text>
        Os tipos de acesso permitidos em uma página são: leitura e gravação, onde a leitura permite a leitura da página e a
        gravação permite a alteração.Os dois combinados fazem um mecanismo de proteção simples e eficiente, isso permite desde o
        acesso total da página até chegar a permitir nenhum acesso.
      </S.Text>

      <S.MediaContainer>
        <Image
          image={Img12}
          caption="Figura 2: Proteção de memória"
          credit="http://memoriavirtualunisc.blogspot.com/p/tipos-de-memoria-virtual.html"
        />
      </S.MediaContainer>

      <S.Text>
        Então sempre que uma página é referenciada, o sistema analisa a tabela de mapeamento do processo a proteção do frame para
        assim determinar a operação é permitida, isso significa dizer que caso haja uma tentativa de gravação em uma página que
        possui proteção apenas para leitura , será gerado um erro com a ocorrência específica do problema através do sistema
        operacional.
      </S.Text>

      <S.Title>Videos:</S.Title>
      <S.MediaContainer>
        <S.Video
          src="https://www.youtube.com/embed/XpIWhtuqDyQ?si=9VZIBVD5laKEl_r4"
          title="Me Salva Sistemas Operacionais: Proteção de Memória com a Paginação"
        />
      </S.MediaContainer>
    </PostPage>
  );
}
