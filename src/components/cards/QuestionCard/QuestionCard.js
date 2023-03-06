import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './QuestionCard.style';

const QuestionCard = ({item, questionNumber}) => {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(-1);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const shuffledAnswers = [
      item.correct_answer,
      ...item.incorrect_answers,
    ].sort(() => Math.random() - 0.5);
    setAnswers(shuffledAnswers);
  }, [item.correct_answer, item.incorrect_answers]);

  const selectedAnswerStyle =
    selectedAnswerIndex !== -1 &&
    (item.correct_answer === answers[selectedAnswerIndex]
      ? styles.correct_answer
      : styles.incorrect_answer);

  return (
    <View style={styles.container}>
      <View style={styles.question_container}>
        <Text style={styles.question_text}>
          {questionNumber} - {decodeURIComponent(item.question)}
        </Text>
      </View>
      <View style={styles.answers_container}>
        {answers.map((answer, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedAnswerIndex(index)}>
            <Text
              style={[
                styles.answers_text,
                selectedAnswerIndex === index && selectedAnswerStyle,
              ]}>
              {decodeURIComponent(answer)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default QuestionCard;

// import React, {useState, useEffect} from 'react';
// import {View, Text, TouchableOpacity} from 'react-native';
// import {useDispatch} from 'react-redux';
// import {addUserAnswer} from '../../redux/quizSlice';

// import styles from './QuestionCard.style';

// const QuestionCard = ({item, questionNumber}) => {
//   const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(-1);
//   const [answers, setAnswers] = useState([]);

//   const dispatch = useDispatch();

//   const handleAnswerPress = (selectedAnswer, index) => {
//     setSelectedAnswerIndex(index);
//     const isAnswerCorrect = item.correct_answer === selectedAnswer;
//     dispatch(addUserAnswer({questionNumber, selectedAnswer, isAnswerCorrect}));
//   };

//   useEffect(() => {
//     const shuffledAnswers = [
//       item.correct_answer,
//       ...item.incorrect_answers,
//     ].sort(() => Math.random() - 0.5);
//     setAnswers(shuffledAnswers);
//   }, [item.correct_answer, item.incorrect_answers]);

//   const selectedAnswerStyle =
//     selectedAnswerIndex !== -1 &&
//     (item.correct_answer === answers[selectedAnswerIndex]
//       ? styles.correct_answer
//       : styles.incorrect_answer);

//   return (
//     <View style={styles.container}>
//       <View style={styles.question_container}>
//         <Text style={styles.question_text}>
//           {questionNumber} - {decodeURIComponent(item.question)}
//         </Text>
//       </View>
//       <View style={styles.answers_container}>
//         {answers.map((answer, index) => (
//           <TouchableOpacity
//             key={index}
//             onPress={() => handleAnswerPress(index, answer)}>
//             <Text
//               style={[
//                 styles.answers_text,
//                 selectedAnswerIndex === index && selectedAnswerStyle,
//               ]}>
//               {decodeURIComponent(answer)}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </View>
//   );
// };

// export default QuestionCard;
