import React from 'react';
import { Input } from '../styles';

export default EmailInput = ({ setEmail, ...props }) => {
  return (
    <Input
      placeholder="E-mail"
      keyboardType={"email-address"}
      {...props}
      onChangeText={value => setEmail(value)} />
  );
}