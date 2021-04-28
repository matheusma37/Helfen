import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';

import Logo from './components/Logo';
import BackgroundImage from '../../components/BackgroundImage';

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

import image from '../../assets/images/start.jpg';

export default StartScreen = ({ navigation, setImage }) => {
  return (
    <BackgroundImage source={image} >
      <Container>
        <StatusBar barStyle='light-content' translucent={true} backgroundColor='rgba(0,0,0,0.15)' />
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
          <SquareButton style={styles.createAccount} onPress={() => navigation.navigate('SignUp')}>
            <WhiteMidText>Criar minha conta</WhiteMidText>
          </SquareButton>
          <EnterContainer>
            <EnterText>Já sou usuário </EnterText>
            <TouchableOpacity>
              <GreenMidText>Entrar</GreenMidText>
            </TouchableOpacity>
          </EnterContainer>
        </Footer>
      </Container >
    </BackgroundImage>
  );
}