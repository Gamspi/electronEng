import {createSlice} from '@reduxjs/toolkit';
import {WordsState} from './types';
import reducers from './redusers';

const initialState: WordsState = {
    words: []
};

export const generalSlice = createSlice({
    name: 'words',
    initialState,
    reducers,
});

export default generalSlice.reducer;
