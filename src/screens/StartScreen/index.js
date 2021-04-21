import React from 'react';
import { TouchableOpacity, StatusBar } from 'react-native';

import Logo from './components/Logo';

import {
  Container,
  Welcome,
  WhiteMidText,
  Footer,
  SquareButton,
  GreenMidText,
  EnterContainer,
  EnterText,
  styles
} from './styles';

export default StartScreen = ({ navigation }) => {
  return (
    <Container>
      <StatusBar barStyle='light-content' backgroundColor='rgba(0,0,0,0.15)' />
      <Logo />
      <Welcome>
        <WhiteMidText>
          Olá! Bem-vindo ao Helfen!
        </WhiteMidText>
        <WhiteMidText>
          Já nos conhece?
        </WhiteMidText>
      </Welcome>
      <Footer>
        <SquareButton style={styles.moreInfo}>
          <GreenMidText>Quero saber mais!</GreenMidText>
        </SquareButton>
        <SquareButton style={styles.createAccount}>
          <WhiteMidText onPress={() => navigation.navigate('SignUp')}>Criar minha conta</WhiteMidText>
        </SquareButton>
        <EnterContainer>
          <EnterText>Já sou usuário </EnterText>
          <TouchableOpacity>
            <GreenMidText>Entrar</GreenMidText>
          </TouchableOpacity>
        </EnterContainer>
      </Footer>
    </Container >
  );
}