import {Draft, PayloadAction} from '@reduxjs/toolkit';
import {WordsState} from './types';
import {Word} from "../../types/word";

const reducers = {
    addWord: (
        state: Draft<WordsState>,
        {payload}: PayloadAction<Word>,
    ) => {
        state.words = [...state.words, payload];
    },


};

export default reducers;
