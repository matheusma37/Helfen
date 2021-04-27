import React from 'react';
import { Input } from '../styles';

export default PhoneInput = ({ setPhone, ...props }) => {
  function inputMask(value) {
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
    value = value.replace(/(\s\d)(\d)/g, '$1 $2');
    value = value.replace(/(\d+)(\d{4})$/g, '$1-$2');
    setPhone(value);
  }

  return (
    <Input
      placeholder="Telefone"
      keyboardType={"phone-pad"}
      maxLength={16}
      {...props}
      onChangeText={value => inputMask(value)} />
  );
}