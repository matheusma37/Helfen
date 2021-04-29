import React, { useState } from 'react';
import { TouchableOpacity, StatusBar } from 'react-native';

import {
  CPFInput,
  DateOfBirthInput,
  EmailInput,
  NameInput,
  PasswordInput,
  PhoneInput
} from '../components/Input';

import CRPInput from './components/CRPInput';

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

export default PsychologistSignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [cpf, setCPF] = useState('');
  const [crp, setCRP] = useState('');
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
              Olá, seja bem-vindo!
            </WhiteText>
            <WhiteText>
              Para começarmos a te auxiliar, precisamos que você preencha todos os campos abaixo para criarmos seu cadastro:
            </WhiteText>
          </TopMessage>
          <Form>
            <NameInput
              value={name}
              setName={setName} />
            <CPFInput
              value={cpf}
              setCPF={setCPF} />
            <CRPInput
              value={crp}
              setCRP={setCRP} />
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