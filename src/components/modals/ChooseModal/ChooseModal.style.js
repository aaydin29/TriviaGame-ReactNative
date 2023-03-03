import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../styles/colors';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    borderWidth: 1,
    borderRadius: 10,
    height: deviceSize.height / 2,
    padding: 10,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 15,
  },
  dropdown_container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 7,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  placeholder_style: {
    fontSize: 16,
  },
  selected_text_style: {
    fontSize: 16,
    backgroundColor: '#e0e0e0',
    borderBottomLeftRadius: 7,
    borderTopLeftRadius: 7,
    height: 48,
    paddingTop: 13,
    marginLeft: -10,
    marginRight: 10,
    paddingLeft: 10,
  },
  start_button_text: {
    backgroundColor: colors.lightblue,
    padding: 12,
    textAlign: 'center',
    borderRadius: 7,
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    marginBottom: 15,
  },
});
