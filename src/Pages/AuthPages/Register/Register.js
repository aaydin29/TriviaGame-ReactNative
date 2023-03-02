import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import styles from './Register.style';
import Button from '../../../components/Button/Button';
import authErrorMessages from '../../../utils/authErrorMessages';

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  repassword: '',
};

const Register = ({navigation}) => {
  function handleLogin() {
    navigation.goBack();
  }

  async function handleFormSubmit(formValues) {
    if (formValues.password !== formValues.repassword) {
      showMessage({
        message: 'Passwords not match!',
        type: 'danger',
      });
      return;
    } else if (formValues.username.trim() === '') {
      showMessage({
        message: 'Username is required!',
        type: 'danger',
      });
      return;
    } else {
      try {
        await auth().createUserWithEmailAndPassword(
          formValues.email,
          formValues.repassword,
        );
        await database().ref(`users/${auth().currentUser.uid}`).set({
          username: formValues.username,
        });
        showMessage({
          message: 'Account created successfully.',
          type: 'success',
        });
        navigation.navigate('LoginPage');
      } catch (error) {
        showMessage({
          message: authErrorMessages(error.code),
          type: 'danger',
        });
      }
    }
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../../assests/images/triviaLogo.png')}
      />
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <View style={styles.input_container}>
              <TextInput
                style={styles.input}
                value={values.username}
                onChangeText={handleChange('username')}
                placeholder="Username"
              />
              <TextInput
                style={styles.input}
                value={values.email}
                onChangeText={handleChange('email')}
                placeholder="E-mail"
              />
              <TextInput
                style={styles.input}
                value={values.password}
                onChangeText={handleChange('password')}
                placeholder="Password"
                secureTextEntry
              />
              <TextInput
                style={styles.input}
                value={values.repassword}
                onChangeText={handleChange('repassword')}
                placeholder="Repassword"
                secureTextEntry
              />
            </View>
            <Button text="Register" theme="tertiary" onPress={handleSubmit} />
          </>
        )}
      </Formik>
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
