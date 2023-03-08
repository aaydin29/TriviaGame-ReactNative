import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 7,
    backgroundColor: colors.darkblue,
  },
  question_container: {},
  question_text: {
    margin: 15,
    textAlign: 'center',
    flex: 1,
    fontWeight: '500',
    fontSize: 16,
    color: 'white',
  },
  answers_container: {
    marginBottom: 10,
  },
  answers_text: {
    margin: 5,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.orange,
    borderRadius: 7,
    padding: 10,
    paddingLeft: 10,
    color: 'white',
  },
  correct_answer: {
    backgroundColor: 'green',
  },
  incorrect_answer: {
    backgroundColor: 'red',
  },
});
