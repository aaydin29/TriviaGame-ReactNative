import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';

import styles from './Register.style';
import Button from '../../../components/Button/Button';

const Register = ({navigation}) => {
  const handleLogin = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../../assests/images/triviaLogo.png')}
      />
      <View style={styles.input_container}>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput style={styles.input} placeholder="E-mail" />
        <TextInput style={styles.input} placeholder="Password" />
        <TextInput style={styles.input} placeholder="Repassword" />
      </View>
      <Button text="Register" theme="tertiary" />
      <View style={styles.register_container}>
        <Text style={styles.register_title}>Already have an account?</Text>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.register_text}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
