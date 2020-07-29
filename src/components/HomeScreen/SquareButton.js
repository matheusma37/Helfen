import React from 'react';
import { TouchableOpacity } from 'react-native';

import styles from './SquareButtonStyles'

class SquareButton extends React.Component {
  render() {
    let { style } = this.props
    return (
      <TouchableOpacity style={[styles.button, style]} >
        {this.props.children}
      </ TouchableOpacity>
    )
  }
}

export default SquareButton;