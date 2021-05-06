import React, { useState, useEffect } from 'react';
import { StatusBar, TouchableOpacity, Keyboard, KeyboardAvoidingView } from 'react-native';

import BackgroundImage from '../../components/BackgroundImage';

import {
  Container,
  Content,
  Footer,
  Form,
  GrayText,
  GreenText,
  Header,
  Input,
  InputGroup,
  RoundedButton,
  RoundedView,
  TextGroup,
  WhiteText,
  styles
} from './styles';

import image from '../../assets/images/start.jpg';

export default LoginScreen = ({ navigation }) => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const _keyboardDidShow = () => setKeyboardStatus(!keyboardStatus);
  const _keyboardDidHide = () => setKeyboardStatus(!keyboardStatus);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, [keyboardStatus]);

  return (
    <BackgroundImage source={image} >
      <Container>
        <StatusBar barStyle='light-content' translucent={true} backgroundColor='rgba(0,0,0,0.15)' />
        <Header />
        <Content style={keyboardStatus && { height: '100%' }}>
          <TextGroup>
            <GrayText>Que bom ter você de volta! 😃</GrayText>
            <GrayText>Por favor, faça seu login:</GrayText>
          </TextGroup>
          <KeyboardAvoidingView behavior="position">
            <Form>
              <InputGroup>
                <Input
                  placeholder="E-mail"
                  keyboardType={"email-address"}>
                </Input>
                <Input
                  placeholder="Senha"
                  secureTextEntry={true}
                  style={{ borderTopWidth: 0 }}>
                </Input>
              </InputGroup>
              <RoundedButton>
                <WhiteText>Entrar</WhiteText>
              </RoundedButton>
            </Form>
          </KeyboardAvoidingView>
          {keyboardStatus ? null :
            <RoundedView>
              <GrayText style={{ fontSize: 14 }}>Ainda não possui uma conta? </GrayText>
              <TouchableOpacity>
                <GreenText>Cadastre-se</GreenText>
              </TouchableOpacity>
            </RoundedView>}
        </Content>
        <Footer />
      </Container >
    </BackgroundImage>
  );
}