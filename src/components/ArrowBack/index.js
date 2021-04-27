import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ArrowBack = (props) => {
  return (
    <Icon
      {...props}
      name={'west'}
      color="#FFF"
      size={35}
      style={{ marginLeft: 10 }} />
  )
}

export default ArrowBack;