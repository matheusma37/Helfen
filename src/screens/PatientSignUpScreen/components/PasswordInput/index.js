import React from 'react';
import { Input } from '../styles';

export default PasswordInput = ({ setPassword, ...props }) => {
  return (
    <Input
      placeholder="Senha"
      secureTextEntry={true}
      {...props}
      onChangeText={value => setPassword(value)} />
  );
}