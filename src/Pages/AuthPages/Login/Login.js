import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';

import styles from './Login.style';
import Button from '../../../components/Button/Button';

const Login = ({navigation}) => {
  const handleCreate = () => {
    navigation.navigate('RegisterPage');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../../assests/images/triviaLogo.png')}
      />
      <View style={styles.input_container}>
        <TextInput style={styles.input} placeholder="E-mail" />
        <TextInput style={styles.input} placeholder="Password" />
      </View>
      <Button text="Login" theme="tertiary" />
      <View style={styles.register_container}>
        <Text style={styles.register_title}>You don't have an account?</Text>
        <TouchableOpacity onPress={handleCreate}>
          <Text style={styles.register_text}>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
