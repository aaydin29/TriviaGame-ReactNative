import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    flex: 1,
    paddingBottom: 70,
  },
  header_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.darkblue,
    padding: 15,
  },
  category: {
    color: 'white',
    fontSize: 15,
    marginLeft: -10,
  },
  second: {
    color: 'white',
    fontSize: 15,
  },
  submit: {
    color: colors.lightblue,
    fontSize: 15,
    borderWidth: 1,
    borderColor: colors.orange,
    borderRadius: 7,
    padding: 5,
    paddingHorizontal: 10,
    marginRight: -5,
  },
});
