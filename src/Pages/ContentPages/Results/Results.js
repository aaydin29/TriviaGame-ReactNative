import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {showMessage} from 'react-native-flash-message';

const Results = ({route, navigation}) => {
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

  function handleLeaderboard() {
    navigation.navigate('Leaderboard');
  }

  function handleBackHome() {
    navigation.navigate('Home');
  }

  return (
    <View>
      <Text>category: {selectedCategory.label}</Text>
      <Text>{score}</Text>
      <TouchableOpacity onPress={handleShareScore}>
        <Text>Share Score</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLeaderboard}>
        <Text>Leaderboard</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text onPress={handleBackHome}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Results;
