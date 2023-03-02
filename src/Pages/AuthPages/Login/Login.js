import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import {showMessage} from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';

import styles from './Login.style';
import Button from '../../../components/Button/Button';
import authErrorMessages from '../../../utils/authErrorMessages';

const initialFormValues = {
  email: '',
  password: '',
};

const Login = ({navigation}) => {
  function handleCreate() {
    navigation.navigate('RegisterPage');
  }

  async function handleFormSubmit(formValues) {
    try {
      await auth().signInWithEmailAndPassword(
        formValues.email,
        formValues.password,
      );
      navigation.navigate('ContentPages');
    } catch (error) {
      showMessage({
        message: authErrorMessages(error.code),
        type: 'danger',
      });
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
                value={values.email}
                onChangeText={handleChange('email')}
                style={styles.input}
                placeholder="E-mail"
              />
              <TextInput
                value={values.password}
                onChangeText={handleChange('password')}
                style={styles.input}
                placeholder="Password"
                secureTextEntry
              />
            </View>
            <Button text="Login" theme="tertiary" onPress={handleSubmit} />
          </>
        )}
      </Formik>
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
