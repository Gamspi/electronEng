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


    removeWord: (
        state: Draft<WordsState>,
        {payload}: PayloadAction<Word['id']>,
    ) => {
        state.words = state.words.filter(item => item.id !== payload)
    },


};

export default reducers;
