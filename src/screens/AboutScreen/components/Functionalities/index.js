import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Header,
  HeaderText,
  Content,
  Card,
  Dot,
  ContentText,
} from './styles'

export default Functionalities = ({ ...props }) => {
  return (
    <Container showsVerticalScrollIndicator={false} {...props}>
      <Header>
        <HeaderText>Funcionalidades</HeaderText>
      </Header>
      <Content>
        <Card>
          <Icon
            name='flag-variant'
            size={48}
            color="#000"
            style={{ marginRight: 5 }} />
          <Dot />
          <ContentText>
            Funcionalidade aqui!!!
          </ContentText>
        </Card>
        <Card>
          <Icon
            name='flag-variant'
            size={48}
            color="#000"
            style={{ marginRight: 5 }} />
          <Dot />
          <ContentText>
            Funcionalidade aqui!!!
          </ContentText>
        </Card>
        <Card>
          <Icon
            name='flag-variant'
            size={48}
            color="#000"
            style={{ marginRight: 5 }} />
          <Dot />
          <ContentText>
            Funcionalidade aqui!!!
          </ContentText>
        </Card>
        <Card>
          <Icon
            name='flag-variant'
            size={48}
            color="#000"
            style={{ marginRight: 5 }} />
          <Dot />
          <ContentText>
            Funcionalidade aqui!!!
          </ContentText>
        </Card>
        <Icon
          name='flag-variant'
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