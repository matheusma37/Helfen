import React, { useState } from 'react';
import { StatusBar } from 'react-native';

import LoadingScreen from '../LoadingScreen';
import ArrowBack from '../../components/ArrowBack';

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

import BackgroundImage from '../../components/BackgroundImage';
import { lightOrange, midOrange } from '../../assets/colors';
import image from '../../assets/images/invite.jpg';

export default SignUpScreen = ({ navigation }) => {
  const [invite, onChangeInvite] = useState('');
  const [loading, setLoading] = useState(false);

  function sendInviteCode(invite) {
    navigation.setOptions({
      headerLeft: (props) => (
        <ArrowBack disabled={true} {...props} />
      )
    });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.setOptions({
        headerLeft: (props) => (
          <ArrowBack  {...props} />
        )
      });
      navigation.navigate('PatientSignUp');
    }, 3000);
  }

  return (
    <BackgroundImage source={image}>
      <Container>
        <StatusBar barStyle='light-content' translucent={true} backgroundColor='rgba(0,0,0,0.15)' />
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
          <RoundedButton style={styles.shadowedButton} onPress={() => sendInviteCode(invite)}>
            <Gradient colors={[lightOrange, midOrange]}>
              <WhiteText>Pronto!</WhiteText>
            </Gradient>
          </RoundedButton>
        </Form>
      </Container >
      {loading && <LoadingScreen message="Aguardando confirmação do convite..." />}
    </BackgroundImage>
  );
}