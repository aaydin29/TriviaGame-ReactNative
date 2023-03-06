import {createSlice} from '@reduxjs/toolkit';

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    questions: [], // burada çektiğiniz soruları saklayabilirsiniz
    userAnswers: [], // burada kullanıcının verdiği cevapları saklayabilirsiniz
  },
  reducers: {
    addUserAnswer: (state, action) => {
      state.userAnswers.push(action.payload);
    },
  },
});

export const {addUserAnswer} = quizSlice.actions;

export default quizSlice.reducer;
