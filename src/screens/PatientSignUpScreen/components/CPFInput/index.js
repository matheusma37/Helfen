import React from 'react';
import { Input } from '../styles';

export default CPFInput = ({ setCPF, ...props }) => {
  function inputMask(value) {
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{3})(\d)/g, '$1.$2');
    value = value.replace(/(\.\d{3})(\d)/g, '$1.$2');
    value = value.replace(/(\.\d{3})(\d+)$/g, '$1-$2');
    setCPF(value);
  }

  return (
    <Input
      placeholder="CPF"
      keyboardType={"numeric"}
      maxLength={14}
      {...props}
      onChangeText={value => inputMask(value)} />
  );
}