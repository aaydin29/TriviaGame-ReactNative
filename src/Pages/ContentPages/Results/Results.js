import React from 'react';
import {View, Text} from 'react-native';

const Results = ({route}) => {
  const {numCorrectAnswers} = route.params;

  return (
    <View>
      <Text>{numCorrectAnswers}</Text>
    </View>
  );
};

export default Results;
