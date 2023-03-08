import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkblue,
  },
  header_container: {
    borderBottomWidth: 1,
    borderColor: 'white',
    padding: 15,
    // marginBottom: 50,
  },
  header_text: {
    color: '#eceff1',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  results_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: colors.orange,
  },
  category: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  score: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  success_text: {
    textAlign: 'center',
    color: '#64dd17',
    fontWeight: '400',
    fontSize: 20,
    marginTop: 50,
    marginBottom: -30,
  },
  fail_text: {
    textAlign: 'center',
    color: '#dd2c00',
    fontWeight: '400',
    fontSize: 20,
    marginTop: 50,
    marginBottom: -30,
  },
  lottie_container: {
    flex: 1,
    paddingTop: 200,
  },
  iconAndbutton_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderRadius: 7,
    borderColor: colors.orange,
    padding: 10,
    margin: 10,
    marginBottom: 150,
  },
  button_text: {
    color: '#e0e0e0',
  },
  share_icon: {
    marginLeft: 20,
    marginBottom: 5,
  },
  leaderboard_icon: {
    marginLeft: 15,
    marginBottom: 5,
  },
  home_icon: {
    marginLeft: 3,
    marginBottom: 5,
  },
});
