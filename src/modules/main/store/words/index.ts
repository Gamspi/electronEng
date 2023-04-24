import {createSlice} from '@reduxjs/toolkit';
import {WordsState} from './types';
import reducers from './redusers';

const initialState: WordsState = {
    words: []
};

export const wordsSlice = createSlice({
    name: 'words',
    initialState,
    reducers,
});
export const  wordsActions = wordsSlice.actions
export default wordsSlice.reducer;
