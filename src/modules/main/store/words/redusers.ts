import {Draft, PayloadAction} from '@reduxjs/toolkit';
import {WordsState} from './types';

const reducers = {
  setIsLoading: (
    state: Draft<WordsState>,
    {payload}: PayloadAction<any[]>,
  ) => {
    state.words = payload;
  },

};

export default reducers;
