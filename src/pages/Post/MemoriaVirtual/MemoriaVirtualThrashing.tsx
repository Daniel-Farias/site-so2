import { PostPage } from '../../../components/PostPage';
import { Image } from '../../../components/Image';
import { Video } from '../../../components/Video';
import Img14 from '../../../assets/images/memoria-virtual/14.png';
import * as S from '../styles';

export function MemoriaVirtualThrashing() {
  return (
    <PostPage>
      <S.PageTitle>Thrashing</S.PageTitle>

      <S.Text>
        O thrashing é um fenômeno que ocorre quando um sistema operacional está constantemente trocando dados entre a memória
        principal (RAM) e a memória secundária (geralmente um disco rígido) de maneira intensiva e ineficiente, comprometendo o
        processamento e tornando o sistema mais lento. Esse problema é geralmente resultado da falta de recursos, como a
        insuficiência de RAM disponível para atender às necessidades do sistema e dos aplicativos em execução.
      </S.Text>

      <S.Text>
        Quando a memória física fica cheia, o sistema operacional precisa transferir algumas páginas para a memória secundária
        para liberar espaço. Se o sistema operacional precisar acessar uma página que foi transferida para a memória secundária,
        ele precisará transferi-la de volta para a memória física. Se isso acontecer com frequência, o sistema operacional pode
        acabar gastando mais tempo transferindo páginas entre a memória física e a memória secundária do que executando os
        programas em si.
      </S.Text>

      <S.List>
        <S.ListTitle>O thrashing pode ser causado por vários fatores dentre eles:</S.ListTitle>
        <S.ListItem>Execução de muitos programas simultaneamente.</S.ListItem>
        <S.ListItem>Alocação excessiva de memória para cada programa.</S.ListItem>
        <S.ListItem>Falta de memória física disponível.</S.ListItem>
      </S.List>

      <S.Text>
        O uso de memória virtual pode ajudar a mitigar o problema do thrashing, permitindo que o sistema operacional use a memória
        secundária como uma extensão da memória física. No entanto, o uso excessivo de memória virtual também pode levar ao
        thrashing, pois o sistema operacional pode acabar transferindo muitas páginas entre a memória física e a memória
        secundária.
      </S.Text>

      <S.Text>
        Para evitar o thrashing, é importante garantir que o sistema operacional tenha memória física suficiente para atender às
        necessidades dos programas em execução. Isso pode ser feito aumentando a quantidade de memória física disponível no
        sistema ou reduzindo a quantidade de memória alocada para cada programa. Além disso, o uso de algoritmos de gerenciamento
        de memória eficientes pode ajudar a minimizar o problema do thrashing.
      </S.Text>

      <S.MediaContainer>
        <Image
          image={Img14}
          caption="Figura 1: TÉCNICAS PARA LIDAR COM THRASHING"
          credit="https://acervolima.com/tecnicas-para-lidar-com-thrashing-1/"
        />
      </S.MediaContainer>

      <S.Title>Videos:</S.Title>
      <S.MediaContainer>
        <Video
          src="https://www.youtube.com/embed/7UsHyVPMbI8?si=k-yDU4iROTG3sKn2"
          caption="Thrashing in Operating system"
          credit="Youtube - Canal: Easy Learning with Nisha"
        />
      </S.MediaContainer>
    </PostPage>
  );
}
