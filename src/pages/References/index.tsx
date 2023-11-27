import { PostPage } from '../../components/PostPage';
import * as S from './styles';

const refs = [
  {
    name: 'MORENO, Edson. Sistemas Operacionais: Memória virtual. PUCRS, 2012.',
    link: 'https://www.inf.pucrs.br/~emoreno/undergraduate/CC/sisop/class_files/Aula12.pdf',
    access: '16 de novembro de 2023.',
  },
  {
    name: 'CRUZ, Pedro. Sistemas Operacionais. GTA UFRJ, 2018.',
    link: 'https://www.gta.ufrj.br/~cruz/courses/eel770/slides/11_substituicao_paginas.pdf',
    access: '19 de novembro de 2023.',
  },
  {
    name: 'Techniques to handle Thrashing. geeksforgeeks, 2023.',
    link: 'https://www.geeksforgeeks.org/techniques-to-handle-thrashing/',
    access: '17 de novembro de 2023.',
  },
  {
    name: 'Laboratório de Sistemas Operacionais. IFPR, s.d.',
    link: 'https://wiki.foz.ifpr.edu.br/wiki/images/f/fa/Aula2-gerencia-memoria.pdf',
    access: '20 de novembro de 2023.',
  },
  {
    name: 'MACHADO, FRANCIS BERENGER; MAIA, LUIZ PAULO. Arquitetura de sistemas operacionais. Rio De Janeiro: Ltc Editora, 2014.',
    access: '22 de novembro de 2023.',
  },
  {
    name: 'TANENBAUM, Andrew S.. Sistemas Operacionais Modernos. 3ª ed. São Paulo: Pearson Prentice Hall. 2009.',
    access: '23 de novembro de 2023.',
  },
  {
    name: 'Laine, Jean M.. Sistemas Operacionais: Memória Virtual. PUCGO',
    link: 'https://professor.pucgoias.edu.br/SiteDocente/admin/arquivosUpload/17785/material/AULA%2014%20-%20Memria%20Virtual.pdf',
    access: '23 de novembro de 2023.',
  },
  {
    name: 'Gomes, Roberta L.. Sistemas Operacionais: Gerência de Memória. LPRMB DI UFES, 2019.',
    link: 'http://www.inf.ufes.br/~rgomes/so_fichiers/aula17.pdf',
    access: '24 de novembro de 2023.',
  },
];

export function ReferencesPage() {
  return (
    <PostPage>
      <S.PageTitle>Referências</S.PageTitle>
      <S.List>
        {refs.map((ref) => (
          <S.ListItem key={ref.name}>
            <S.Name>{ref.name}</S.Name>
            {ref.link && <S.Link href={ref.link}>{ref.link}</S.Link>}
            <S.Access>Acesso em: {ref.access}</S.Access>
          </S.ListItem>
        ))}
      </S.List>
    </PostPage>
  );
}
