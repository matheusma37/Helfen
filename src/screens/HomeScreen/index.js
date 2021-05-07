import React from 'react';
import { StatusBar, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Header,
  FunctionCard,
  WhiteText,
  HeaderWhiteText,
  CardIconContainer,
  CardTextContainer
} from './styles';

import BackgroundImage from '../../components/BackgroundImage';
import image from '../../assets/images/start.jpg';

import logo from '../../assets/images/logo.png';

export default HomeScreen = ({ navigation }) => {
  return (
    <BackgroundImage source={image}>
      <Container>
        <StatusBar barStyle='light-content' translucent={true} backgroundColor='rgba(0,0,0,0.5)' />
        <Header>
          <Image
            style={{ borderRadius: 50, width: 30, height: 30 }}
            source={logo} />
          <HeaderWhiteText>Matheus</HeaderWhiteText>
        </Header>
        <FunctionCard>
          <CardIconContainer>
            <Icon
              style={{ padding: 10 }}
              name={'book'}
              color='white'
              size={30} />
          </CardIconContainer>
          <CardTextContainer>
            <WhiteText>Diário</WhiteText>
          </CardTextContainer>
        </FunctionCard>
        <FunctionCard>
          <CardIconContainer>
            <Icon
              style={{ padding: 10 }}
              name={'date-range'}
              color='white'
              size={30} />
          </CardIconContainer>
          <CardTextContainer>
            <WhiteText>Consultas</WhiteText>
          </CardTextContainer>
        </FunctionCard>
        <FunctionCard>
          <CardIconContainer>
            <Icon
              style={{ padding: 10 }}
              name={'timeline'}
              color='white'
              size={30} />
          </CardIconContainer>
          <CardTextContainer>
            <WhiteText>Histórico</WhiteText>
          </CardTextContainer>
        </FunctionCard>
      </Container>
    </BackgroundImage>
  );
}