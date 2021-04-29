import React from 'react';
import { Input } from './styles';

export default DateOfBirthInput = ({ setDateOfBirth, ...props }) => {
  return (
    <Input
      type={'datetime'}
      options={{
        format: 'DD/MM/YYYY'
      }}
      placeholder="Data de nascimento"
      {...props}
      maxLength={10}
      onChangeText={value => { setDateOfBirth(value) }}
    />
  );
}