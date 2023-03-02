import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';

const deviceSize = Dimensions.get('window');

const base_style = StyleSheet.create({
  button_container: {
    alignItems: 'center',
    padding: 13,
    borderRadius: 7,
    width: deviceSize.width / 1.1,
  },
  button_text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default {
  primary: StyleSheet.create({
    ...base_style,
    button_container: {
      ...base_style.button_container,
      backgroundColor: colors.orange,
    },
    button_text: {
      ...base_style.button_text,
      color: colors.darkblue,
    },
  }),
  secondary: StyleSheet.create({
    ...base_style,
    button_container: {
      ...base_style.button_container,
      backgroundColor: colors.lightblue,
    },
    button_text: {
      ...base_style.button_text,
      color: colors.darkblue,
    },
  }),
  tertiary: StyleSheet.create({
    ...base_style,
    button_container: {
      ...base_style.button_container,
      backgroundColor: colors.darkblue,
      borderWidth: 1,
      borderColor: colors.orange,
    },
    button_text: {
      ...base_style.button_text,
      color: colors.orange,
    },
  }),
};
