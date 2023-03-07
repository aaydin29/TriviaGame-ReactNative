import React from 'react';
import {View, Text, Image} from 'react-native';
import LeadersCard from '../../../components/cards/LeadersCard/LeadersCard';

import styles from './Leaderboard.style';
import Button from '../../../components/Button/Button';

const Leaderboard = ({navigation}) => {
  function handleBackToHome() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.header_image}
        source={require('../../../assests/images/leaders.png')}
      />
      <View style={styles.board_container}>
        <View style={styles.title_container}>
          <Text style={styles.user_title}>User</Text>
          <Text style={styles.category_title}>Category</Text>
          <Text style={styles.score_title}>Score</Text>
        </View>
        <LeadersCard />
      </View>
      <View style={styles.button_container}>
        <Button
          text="Back to Home"
          theme="tertiary"
          onPress={handleBackToHome}
        />
      </View>
    </View>
  );
};

export default Leaderboard;
