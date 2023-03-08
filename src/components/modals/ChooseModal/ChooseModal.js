import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {Dropdown} from 'react-native-element-dropdown';
import {useNavigation} from '@react-navigation/native';
import {showMessage} from 'react-native-flash-message';

import styles from './ChooseModal.style';
import {categories, difficulties, questionTypes} from '../../../ModalData';

const ChooseModal = ({isVisible, onClose, onSend}) => {
  const [category, setCategory] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [questionType, setQuestionType] = useState(null);
  const [questions, setQuestions] = useState([]);

  const navigation = useNavigation();

  const getQuestions = () => {
    // It pulls data from the API according to the options selected by the user.
    if (!category || !difficulty || !questionType) {
      return;
    }
    const categoryID = category.value;
    const difficultyLevel = difficulty.value;
    const type = questionType.value;
    const amount = 10;
    const url = `https://opentdb.com/api.php?amount=${amount}&category=${categoryID}&difficulty=${difficultyLevel}&type=${type}&encode=url3986`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setQuestions(data.results);
        navigation.navigate('QuestionPage', {
          questions: data.results,
          category,
        });
      })
      .catch(error =>
        showMessage({
          message: 'Something went wrong!',
          type: 'danger',
        }),
      );
  };

  return (
    <Modal
      isVisible={isVisible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <Text style={styles.title}>Choose your options</Text>
        <View style={styles.dropdown_container}>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholder_style}
            selectedTextStyle={styles.selected_text_style}
            label="Category"
            placeholder="Select category"
            labelField="label"
            valueField="value"
            value={category}
            data={categories}
            onChange={item => setCategory(item)}
          />

          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholder_style}
            selectedTextStyle={styles.selected_text_style}
            label="Difficulty"
            placeholder="Select difficulty"
            labelField="label"
            valueField="value"
            value={difficulty}
            data={difficulties}
            onChange={item => setDifficulty(item)}
          />

          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholder_style}
            selectedTextStyle={styles.selected_text_style}
            label="Type"
            placeholder="Select type"
            labelField="label"
            valueField="value"
            value={questionType}
            data={questionTypes}
            onChange={item => setQuestionType(item)}
          />
        </View>
        <TouchableOpacity onPress={getQuestions}>
          <Text style={styles.start_button_text}>Start</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ChooseModal;
