import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Header,
  HeaderText,
  Content,
  ContentSeparator,
  Card,
  Dot,
  CardText,
} from './styles'

export default Functionalities = ({ ...props }) => {
  return (
    <Container showsVerticalScrollIndicator={false} {...props}>
      <Header>
        <HeaderText>Funcionalidades</HeaderText>
      </Header>
      <Content>
        <ContentSeparator>Psicólogo</ContentSeparator>
        <Card>
          <Icon
            name='flag-variant'
            size={48}
            color="#000"
            style={{ marginRight: 5 }} />
          <Dot />
          <CardText>
            Manter pacientes
          </CardText>
        </Card>
        <Card>
          <Icon
            name='flag-variant'
            size={48}
            color="#000"
            style={{ marginRight: 5 }} />
          <Dot />
          <CardText>
            Manter consultas
          </CardText>
        </Card>
        <Card>
          <Icon
            name='flag-variant'
            size={48}
            color="#000"
            style={{ marginRight: 5 }} />
          <Dot />
          <CardText>
            Manter conta
          </CardText>
        </Card>
        <Card>
          <Icon
            name='flag-variant'
            size={48}
            color="#000"
            style={{ marginRight: 5 }} />
          <Dot />
          <CardText>
            Ver relatórios
          </CardText>
        </Card>
        <ContentSeparator>Paciente</ContentSeparator>
        <Card>
          <Icon
            name='flag-variant'
            size={48}
            color="#000"
            style={{ marginRight: 5 }} />
          <Dot />
          <CardText>
            Manter relatórios
          </CardText>
        </Card>
        <Card>
          <Icon
            name='flag-variant'
            size={48}
            color="#000"
            style={{ marginRight: 5 }} />
          <Dot />
          <CardText>
            Manter conta
          </CardText>
        </Card>
        <Card>
          <Icon
            name='flag-variant'
            size={48}
            color="#000"
            style={{ marginRight: 5 }} />
          <Dot />
          <CardText>
            Marcar consulta
          </CardText>
        </Card>
        <Card>
          <Icon
            name='flag-variant'
            size={48}
            color="#000"
            style={{ marginRight: 5 }} />
          <Dot />
          <CardText>
            Remarcar consulta
          </CardText>
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