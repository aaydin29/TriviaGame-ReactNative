import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../styles/colors';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkblue,
  },
  header: {
    padding: 10,
    backgroundColor: colors.darkblue,
    borderBottomWidth: 2,
    borderColor: colors.orange,
    alignItems: 'center',
  },
  header_title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  info_container: {
    alignItems: 'center',
  },
  logo_container: {
    alignItems: 'center',
    marginTop: -100,
  },
  user_info_container: {
    backgroundColor: '#e0e0e0',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: -100,
    width: deviceSize.width / 2,
    borderRadius: 7,
  },
  user_image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
    borderWidth: 1,
    borderColor: colors.darkblue,
  },
  username: {
    marginRight: 10,
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.darkblue,
  },
  ready_text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 50,
  },
  button_container: {
    marginTop: 30,
    marginBottom: 10,
  },
  logout_button: {
    marginTop: 10,
  },
});
