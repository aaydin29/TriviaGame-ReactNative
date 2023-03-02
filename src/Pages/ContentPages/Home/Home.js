import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Button from '../../../components/Button/Button';

import styles from './Home.style';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_title}>HOME</Text>
        <Icon name="logout" size={30} color="#eceff1" />
      </View>
      <View style={styles.info_container}>
        <View style={styles.logo_container}>
          <Image source={require('../../../assests/images/triviaLogo.png')} />
        </View>
        <View style={styles.user_info_container}>
          <Image
            style={styles.user_image}
            source={require('../../../assests/images/defaultUserImage.jpg')}
          />
          <Text style={styles.username}>username</Text>
        </View>
        <Text style={styles.ready_text}>Are you ready for the challenge?</Text>
        <View style={styles.button_container}>
          <Button text="Start Challenge" theme="secondary" />
        </View>
        <Button text="Leaderboard" theme="primary" />
      </View>
    </View>
  );
};

export default Home;
