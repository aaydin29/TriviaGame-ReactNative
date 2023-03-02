import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './Button.style';

function Button({text, onPress, theme}) {
  return (
    <TouchableOpacity style={styles[theme].button_container} onPress={onPress}>
      <Text style={styles[theme].button_text}>{text}</Text>
    </TouchableOpacity>
  );
}

export default Button;
