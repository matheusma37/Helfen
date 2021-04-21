import React from 'react';
import { TouchableOpacity, StatusBar } from 'react-native';

import {
  Container,
  TopMessage,
  WhiteText,
  GreenText,
  ButtonGroup,
  RoundedButton,
  Footer,
  lightBlue,
  styles
} from './styles';

export default SignUpScreen = ({ navigation }) => {
  return (
    <Container>
      <StatusBar barStyle='light-content' backgroundColor={lightBlue} />
      <TopMessage>
        <WhiteText>Vamos te ajudar no processo de cadastro!</WhiteText>
        <WhiteText>Primeiro, escolha uma das opções:</WhiteText>
      </TopMessage>
      <ButtonGroup>
        <RoundedButton style={[styles.patientButton, styles.shadowedButton]}>
          <WhiteText>Eu tenho um convite!</WhiteText>
        </RoundedButton>
        <RoundedButton style={[styles.psychologistButton, styles.shadowedButton]}>
          <WhiteText>Sou Psicólogo, quero contribuir!</WhiteText>
        </RoundedButton>
      </ButtonGroup >
      <Footer>
        <WhiteText>Já tenho uma conta. </WhiteText>
        <TouchableOpacity>
          <GreenText style={styles.textLink}>Fazer Login</GreenText>
        </TouchableOpacity>
      </Footer>
    </Container >
  );
}