import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Header,
  HeaderText,
  Content,
  Paragraph,
  ContentText,
} from './styles'

export default AboutUs = ({ ...props }) => {
  return (
    <Container showsVerticalScrollIndicator={false} {...props}>
      <Header>
        <HeaderText>Sobre Nós</HeaderText>
      </Header>
      <Content>
        <Paragraph>
          <ContentText>
            Somos um aplicativo com o intuito de dar suporte ao acompanhamento de pacientes durante tratamento psicológico.
          </ContentText>
        </Paragraph>
        <Paragraph>
          <ContentText>
            A ideia surgiu em 2018 como tema do Trabalho de Conclusão de Curso, no Instituto Federal Fluminense, por Everton Gonçalves e Mariana Vieira, ambos alunos do curso de Bacharelado em Sistemas de Informação.
          </ContentText>
        </Paragraph>
        <Icon
          name='import-contacts'
          color="#7BB7D9"
          size={48}
          style={
            {
              marginTop: 40,
              marginBottom: 2
            }
          } />
      </Content>
    </Container>
  );
}