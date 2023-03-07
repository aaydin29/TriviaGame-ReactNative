import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import database from '@react-native-firebase/database';

import styles from './LeadersCard.style';

const LeadersCard = () => {
  const [userResults, setUserResults] = useState([]);

  useEffect(() => {
    database()
      .ref('users/')
      .on('value', snapshot => {
        const data = snapshot.val();
        if (data) {
          const users = Object.values(data)
            .filter(user => user.scores)
            .sort((a, b) => {
              const aMaxScore = Math.max(
                ...Object.values(a.scores).map(score => score.score),
              );
              const bMaxScore = Math.max(
                ...Object.values(b.scores).map(score => score.score),
              );
              return bMaxScore - aMaxScore;
            });
          setUserResults(users);
        }
      });
  }, []);

  return (
    <View>
      {userResults
        .filter(user => user.scores)
        .map((user, index) => (
          <View style={styles.container} key={index}>
            <View style={styles.user_container}>
              {user.photos.profile ? (
                <Image
                  style={styles.image}
                  source={{uri: user.photos.profile}}
                />
              ) : (
                <Image
                  style={styles.image}
                  source={require('../../../assests/images/defaultUserImage.jpg')}
                />
              )}
              <Text style={styles.username}>{user.username}</Text>
            </View>
            {user.scores &&
              Object.values(user.scores).map((score, scoreIndex) => (
                <View style={styles.results_container} key={scoreIndex}>
                  <Text style={styles.category}>{score.category}</Text>
                  <Text style={styles.score}>{score.score}</Text>
                </View>
              ))}
          </View>
        ))}
    </View>
  );
};

export default LeadersCard;
