import React from 'react';
import { Input } from '../styles';

export default NameInput = ({ setName, ...props }) => {
  return (
    <Input
      placeholder="Nome completo"
      {...props}
      onChangeText={value => setName(value)} />
  );
}