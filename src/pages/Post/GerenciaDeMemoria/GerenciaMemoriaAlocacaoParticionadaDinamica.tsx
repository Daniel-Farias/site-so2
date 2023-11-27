import { PostPage } from '../../../components/PostPage';
import { Image } from '../../../components/Image';
import { Video } from '../../../components/Video';
import Img7 from '../../../assets/images/gerencia-de-memoria/7.png';
import Img8 from '../../../assets/images/gerencia-de-memoria/8.png';
import * as S from '../styles';

export function GerenciaMemoriaAlocacaoParticionadaDinamica() {
  return (
    <PostPage>
      <S.PageTitle>Alocação Particionada Dinâmica</S.PageTitle>

      <S.Text>
        Na alocação particionada dinâmica, cada programa utiliza espaço conforme necessário, eliminando a fragmentação interna. No
        entanto, surge a fragmentação externa à medida que programas encerram, deixando espaços pequenos na memória, o que
        dificulta a entrada de novos programas. Este problema ocorre devido à variabilidade no tamanho das áreas ocupadas,
        resultando em fragmentação não utilizável.
      </S.Text>

      <S.Text>
        Diferentemente da fragmentação interna, aqui a gaveta é pequena (espaço alocado), e a roupa (processo) é maior. Não é
        possível colocar a roupa na gaveta, pois ela não cabe. A roupa fica fora da gaveta, ocupando um espaço que poderia ser
        usado por outra gaveta. Esse espaço ocupado é a fragmentação externa, pois está entre as regiões alocadas.
      </S.Text>

      <S.List>
        <S.ListTitle>Existem duas soluções para o problema da fragmentação externa na memória principal</S.ListTitle>
        <S.ListItem>
          Reunião de Espaços Livres Adjacentes: Conforme os programas terminam, apenas os espaços livres adjacentes são reunidos,
          produzindo áreas livres de tamanho maior.
        </S.ListItem>

        <S.MediaContainer>
          <Image
            image={Img7}
            caption="Figura 1: Primeira Solução para Fragmentação Interna"
            credit="https://unibansistemas.files.wordpress.com/2011/04/so-gerenciadememoria-apostila-07.pdf"
          />
        </S.MediaContainer>

        <S.ListItem>
          Relocação de Todas as Partições Ocupadas: Envolve a relocação de todas as partições ocupadas, eliminando todos os
          espaços entre elas e criando uma única área livre contígua
        </S.ListItem>

        <S.MediaContainer>
          <Image
            image={Img8}
            caption="Figura 1: Segunda Solução para Fragmentação Interna"
            credit="https://unibansistemas.files.wordpress.com/2011/04/so-gerenciadememoria-apostila-07.pdf"
          />
        </S.MediaContainer>
      </S.List>

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
