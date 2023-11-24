import React from 'react';

import * as S from './styles';
import logo from '../../assets/images/UESPI_logo.png';
export default function Footer() {
  return (
    <div>
      <S.Footer>
        <S.Widget>
          <S.AreaImage>
            <S.Img src={logo} alt="img" />
            <S.WidgetTitle>BCC-BLOCO06</S.WidgetTitle>
          </S.AreaImage>
          <S.Divider />
          <S.Paragraph>Sistemas Operacionais II</S.Paragraph>
        </S.Widget>

        <S.Widget>
          <S.WidgetTitle>Assuntos</S.WidgetTitle>
          <S.Divider />
          <S.Ul>
            <S.Li>
              <S.Paragraph>Gerência de Memória</S.Paragraph>
            </S.Li>
            <S.Li>
              <S.Paragraph>Memória Virtual</S.Paragraph>
            </S.Li>
          </S.Ul>
        </S.Widget>

        <S.Widget>
          <S.WidgetTitle>Fale conosco</S.WidgetTitle>
          <S.Divider />
          <S.Paragraph>Entre em contato com a nossa equipe para tirar dúvidas!</S.Paragraph>

          <S.TextArea placeholder="Insira aqui seu comentário"></S.TextArea>
          <S.Button type="button">Enviar</S.Button>
        </S.Widget>
      </S.Footer>

      <S.Copyright>
        <S.Paragraph>BCC-BLOCO 06 © 2023. All rights reserved.</S.Paragraph>
      </S.Copyright>
    </div>
  );
}
