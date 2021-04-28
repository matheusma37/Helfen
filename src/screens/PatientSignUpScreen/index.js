import React, { useState } from 'react';
import { TouchableOpacity, StatusBar, ImageBackground } from 'react-native';

import { CPFInput, DateOfBirthInput, EmailInput, NameInput, PasswordInput, PhoneInput } from './components';

import {
  Container,
  Section,
  TopMessage,
  WhiteText,
  GreenText,
  Form,
  RoundedButton,
  Footer,
  styles
} from './styles';

import BackgroundImage from '../../components/BackgroundImage';
import image from '../../assets/images/start.jpg';

export default SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [cpf, setCPF] = useState('');
  const [phone, setPhone] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <BackgroundImage source={image}>
      <Container>
        <StatusBar barStyle='light-content' translucent={true} backgroundColor='rgba(0,0,0,0.15)' />
        <Section>
          <TopMessage>
            <WhiteText>
              Oba!
          </WhiteText>
            <WhiteText>
              Será um prazer ter você por aqui!
          </WhiteText>
            <WhiteText>
              Para começarmos, preencha completamente os campos abaixo:
          </WhiteText>
          </TopMessage>
          <Form>
            <NameInput
              value={name}
              setName={setName} />
            <CPFInput
              value={cpf}
              setCPF={setCPF} />
            <PhoneInput
              value={phone}
              setPhone={setPhone} />
            <DateOfBirthInput
              value={dateOfBirth}
              setDateOfBirth={setDateOfBirth} />
            <EmailInput
              value={email}
              setEmail={setEmail} />
            <PasswordInput
              value={password}
              setPassword={setPassword} />
            <PasswordInput
              value={confirmPassword}
              setPassword={setConfirmPassword} placeholder="Confirme sua senha" />
            <RoundedButton style={styles.shadowedButton}>
              <WhiteText>Tudo Pronto </WhiteText>
            </RoundedButton>
          </Form>
        </Section>
        <Footer>
          <WhiteText>Já tenho uma conta. </WhiteText>
          <TouchableOpacity>
            <GreenText style={styles.textLink}>Fazer Login</GreenText>
          </TouchableOpacity>
        </Footer>
      </Container >
    </BackgroundImage>
  );
}