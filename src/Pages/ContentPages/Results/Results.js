import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {showMessage} from 'react-native-flash-message';

const Results = ({route}) => {
  const {numCorrectAnswers, selectedCategory} = route.params;

  const score = numCorrectAnswers * 10;

  const handleShareScore = () => {
    const user = auth().currentUser;
    const scoreRef = database().ref(`/users/${user.uid}/scores`);
    const newScore = {
      score: score,
      category: selectedCategory.label,
    };
    scoreRef.push(newScore);
    showMessage({
      message: 'Score shared!',
      type: 'success',
    });
  };

  return (
    <View>
      <Text>category: {selectedCategory.label}</Text>
      <Text>{score}</Text>
      <TouchableOpacity onPress={handleShareScore}>
        <Text>Share Score</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Results;
