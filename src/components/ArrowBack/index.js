import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ArrowBack = (props) => {
  return (
    <Icon
      {...props}
      name={'west'}
      color={props.disabled ? "rgba(255, 255, 255, 0.5)" : "#FFF"}
      size={35}
      style={{ marginLeft: 10 }} />
  )
}

export default ArrowBack;