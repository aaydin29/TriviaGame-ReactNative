import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import QuestionCard from '../../../components/cards/QuestionCard/QuestionCard';

import styles from './QuestionPage.style';

const QuestionPage = ({route}) => {
  const {questions, category: selectedCategory} = route.params;
  const [countdown, setCountdown] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(countdown => countdown - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.category}>Category : {selectedCategory.label}</Text>
        <Text style={styles.second}>{countdown}</Text>
        <TouchableOpacity>
          <Text style={styles.submit}>Submit</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={questions}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default QuestionPage;
