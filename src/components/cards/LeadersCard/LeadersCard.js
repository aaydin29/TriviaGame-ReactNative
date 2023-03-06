import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import database from '@react-native-firebase/database';

const LeadersCard = () => {
  const [userResults, setUserResults] = useState([]);

  useEffect(() => {
    database()
      .ref('users/')
      .on('value', snapshot => {
        const data = snapshot.val();
        if (data) {
          const users = Object.values(data);
          setUserResults(users);
        }
      });
  }, []);

  return (
    <View>
      {userResults
        .filter(user => user.scores)
        .map((user, index) => (
          <View key={index}>
            <Image
              style={{width: 50, height: 50}}
              source={{uri: user.photos.profile}}
            />
            <Text>{user.username}</Text>
            {user.scores &&
              Object.values(user.scores).map((score, scoreIndex) => (
                <View key={scoreIndex}>
                  <Text>{score.category}</Text>
                  <Text>{score.score}</Text>
                </View>
              ))}
          </View>
        ))}
    </View>
  );
};

export default LeadersCard;
