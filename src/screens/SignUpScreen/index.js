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
  styles
} from './styles';

import BackgroundImage from '../../components/BackgroundImage';
import image from '../../assets/images/signup.jpg';

export default SignUpScreen = ({ navigation }) => {
  return (
    <BackgroundImage source={image}>
      <Container>
        <StatusBar barStyle='light-content' translucent={true} backgroundColor='rgba(0,0,0,0.15)' />
        <TopMessage>
          <WhiteText>Vamos te ajudar no processo de cadastro!</WhiteText>
          <WhiteText>Primeiro, escolha uma das opções:</WhiteText>
        </TopMessage>
        <ButtonGroup>
          <RoundedButton
            style={[styles.patientButton, styles.shadowedButton]}
            onPress={() => navigation.navigate('Invite')}>
            <WhiteText>Eu tenho um convite!</WhiteText>
          </RoundedButton>
          <RoundedButton
            style={[styles.psychologistButton, styles.shadowedButton]}
            onPress={() => navigation.navigate('PsychologistSignUp')}>
            <WhiteText>Sou Psicólogo, quero contribuir!</WhiteText>
          </RoundedButton>
        </ButtonGroup >
        <Footer>
          <WhiteText>Já tenho uma conta. </WhiteText>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <GreenText style={styles.textLink}>Fazer Login</GreenText>
          </TouchableOpacity>
        </Footer>
      </Container >
    </BackgroundImage>
  );
}