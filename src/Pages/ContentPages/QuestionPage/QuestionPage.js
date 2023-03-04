import React from 'react';
import {View, Text, FlatList} from 'react-native';
import QuestionCard from '../../../components/cards/QuestionCard/QuestionCard';

const QuestionPage = ({route}) => {
  const {questions} = route.params;
  // console.log(questions);

  const renderItem = ({item, index}) => {
    return (
      <QuestionCard
        item={item}
        question={item.question}
        correct_answer={item.correct_answer}
        incorrect_answers={item.incorrect_answers}
        questionNumber={index + 1}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={questions}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default QuestionPage;
