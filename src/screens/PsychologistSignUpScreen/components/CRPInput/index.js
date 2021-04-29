import React from 'react';
import { Input } from './styles';

export default CRPInput = ({ setCRP, ...props }) => {
  function inputMask(value) {
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d)/g, '$1/$2');
    value = value.replace(/(\.\d{3})(\d)/g, '$1.$2');
    value = value.replace(/(\d{3})(\d{3})$/g, '$1.$2');
    setCRP(value);
  }

  return (
    <Input
      placeholder="CRP"
      keyboardType={"numeric"}
      maxLength={10}
      {...props}
      onChangeText={value => inputMask(value)} />
  );
}