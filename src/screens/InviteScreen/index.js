import React, { useState } from 'react';
import { StatusBar } from 'react-native';

import {
  Container,
  Form,
  TextGroup,
  WhiteText,
  InviteInput,
  RoundedButton,
  Gradient,
  styles
} from './styles';

import { lightOrange, midOrange, darkOrange } from '../../assets/colors';

export default SignUpScreen = ({ navigation }) => {
  const [invite, onChangeInvite] = useState(null);

  return (
    <Container>
      <StatusBar barStyle='light-content' backgroundColor={darkOrange} />
      <TextGroup>
        <WhiteText>Você está com o convite aí?</WhiteText>
        <WhiteText>Ótimo!</WhiteText>
      </TextGroup>
      <Form>
        <InviteInput
          onChangeText={onChangeInvite}
          value={invite}
          placeholder="Insira seu convite aqui"
          textAlign="center"
        />
        <RoundedButton style={styles.shadowedButton}>
          <Gradient colors={[lightOrange, midOrange]}>
            <WhiteText>Pronto!</WhiteText>
          </Gradient>
        </RoundedButton>
      </Form>
    </Container >
  );
}