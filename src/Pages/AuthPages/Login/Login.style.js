import {StyleSheet, Dimensions} from 'react-native';

import colors from '../../../styles/colors';
const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkblue,
    alignItems: 'center',
    marginTop: -40,
  },
  logo: {},
  input_container: {
    marginTop: -120,
    alignItems: 'center',
    marginBottom: 7,
  },
  input: {
    margin: 7,
    backgroundColor: '#eceff1',
    width: deviceSize.width / 1.1,
    borderRadius: 7,
    textAlign: 'center',
    fontWeight: '500',
  },
  register_container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
  },
  register_title: {
    color: 'white',
    fontSize: 15,
  },
  register_text: {
    color: colors.orange,
    fontSize: 17,
    marginLeft: 5,
    fontWeight: 'bold',
  },
});
