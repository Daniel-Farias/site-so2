import { PostPage } from '../../components/PostPage';
import * as S from './styles';

export function ReferencesPage() {
  return (
    <PostPage>
      <S.Title>Referências</S.Title>
      <S.List>
        <S.ListItem>
          <S.Name>MORENO, Edson. Sistemas Operacionais: Memória virtual. PUCRS, 2012.</S.Name>
          <S.Link href="https://www.inf.pucrs.br/~emoreno/undergraduate/CC/sisop/class_files/Aula12.pdf">
            https://www.inf.pucrs.br/~emoreno/undergraduate/CC/sisop/class_files/Aula12.pdf
          </S.Link>
          <S.Access>Acesso em: 16 de novembro de 2023.</S.Access>
        </S.ListItem>
        <S.ListItem>
          <S.Name>CRUZ, Pedro. Sistemas Operacionais. GTA UFRJ, 2018.</S.Name>
          <S.Link href="https://www.gta.ufrj.br/~cruz/courses/eel770/slides/11_substituicao_paginas.pdf">
            https://www.gta.ufrj.br/~cruz/courses/eel770/slides/11_substituicao_paginas.pdf
          </S.Link>
          <S.Access>Acesso em: 19 de novembro de 2023.</S.Access>
        </S.ListItem>
        <S.ListItem>
          <S.Name>Techniques to handle Thrashing. geeksforgeeks, 2023.</S.Name>
          <S.Link href="https://www.geeksforgeeks.org/techniques-to-handle-thrashing/">
            https://www.geeksforgeeks.org/techniques-to-handle-thrashing/
          </S.Link>
          <S.Access>Acesso em: 17 de novembro de 2023.</S.Access>
        </S.ListItem>
        <S.ListItem>
          <S.Name>Laboratório de Sistemas Operacionais. IFPR, s.d.</S.Name>
          <S.Link href="https://wiki.foz.ifpr.edu.br/wiki/images/f/fa/Aula2-gerencia-memoria.pdf">
            https://wiki.foz.ifpr.edu.br/wiki/images/f/fa/Aula2-gerencia-memoria.pdf
          </S.Link>
          <S.Access>Acesso em: 20 de novembro de 2023.</S.Access>
        </S.ListItem>
        <S.ListItem>
          <S.Name>
            FRANCIS BERENGER MACHADO; LUIZ PAULO MAIA. Arquitetura de sistemas operacionais. Rio De Janeiro: Ltc Editora, 2014.
          </S.Name>
          <S.Access>Acesso em: 22 de novembro de 2023.</S.Access>
        </S.ListItem>
        <S.ListItem>
          <S.Name>TANENBAUM, Andrew S.. Sistemas Operacionais Modernos. 3ª ed. São Paulo: Pearson Prentice Hall. 2009.</S.Name>
          <S.Access>Acesso em: 23 de novembro de 2023.</S.Access>
        </S.ListItem>
        <S.ListItem>
          <S.Name>Laine, Jean M.. Sistemas Operacionais: Memória Virtual. PUCGO</S.Name>
          <S.Link href="https://professor.pucgoias.edu.br/SiteDocente/admin/arquivosUpload/17785/material/AULA%2014%20-%20Memria%20Virtual.pdf">
            https://professor.pucgoias.edu.br/SiteDocente/admin/arquivosUpload/17785/material/AULA%2014%20-%20Memria%20Virtual.pdf
          </S.Link>
          <S.Access>Acesso em: 23 de novembro de 2023.</S.Access>
        </S.ListItem>
        <S.ListItem>
          <S.Name>Gomes, Roberta L.. Sistemas Operacionais: Gerência de Memória. LPRMB DI UFES, 2019.</S.Name>
          <S.Link href="http://www.inf.ufes.br/~rgomes/so_fichiers/aula17.pdf">
            http://www.inf.ufes.br/~rgomes/so_fichiers/aula17.pdf
          </S.Link>
          <S.Access>Acesso em: 24 de novembro de 2023.</S.Access>
        </S.ListItem>
      </S.List>
    </PostPage>
  );
}
