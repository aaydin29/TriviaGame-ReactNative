import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../styles/colors';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.darkblue,
  },
  header_image: {
    height: 100,
    width: deviceSize.width / 1.3,
    alignSelf: 'center',
    marginTop: -50,
    marginBottom: 5,
  },
  board_container: {
    margin: 10,
    borderRadius: 7,
    height: deviceSize.height / 1.7,
    backgroundColor: '#a6a6a6',
  },
  title_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    paddingBottom: 15,
    backgroundColor: colors.orange,
    borderTopRightRadius: 7,
    borderTopLeftRadius: 7,
  },
  user_title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 35,
    color: colors.darkblue,
  },
  category_title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 20,
    color: colors.darkblue,
  },
  score_title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 20,
    color: colors.darkblue,
  },
  button_container: {
    alignItems: 'center',
    marginTop: 10,
  },
});
