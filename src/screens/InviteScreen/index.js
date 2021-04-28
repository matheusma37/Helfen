import React, { useState } from 'react';
import { StatusBar, ImageBackground } from 'react-native';

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

export default SignUpScreen = ({ navigation, setLoading }) => {
  const [invite, onChangeInvite] = useState('');

  function sendInviteCode(invite) {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
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
    </BackgroundImage>
  );
}