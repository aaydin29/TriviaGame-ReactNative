import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#a6a6a6',
    padding: 10,
    margin: 2,
    marginHorizontal: 5,
  },
  user_container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: -15,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'black',
  },
  username: {
    marginLeft: 15,
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.darkblue,
  },
  results_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  category: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    color: colors.darkblue,
  },
  score: {
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 30,
    color: colors.darkblue,
  },
});
