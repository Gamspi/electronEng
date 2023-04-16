import {createSlice} from '@reduxjs/toolkit';
import {fetchPosts} from './actions';
import {PostState} from './types';

const initialState: PostState = {
  posts: [],
  error: 'this is error text',
  isLoadingPosts: false,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: ({addCase}) => {
    addCase(fetchPosts.fulfilled, (state, {payload}) => {
      state.isLoadingPosts = false;
      state.posts = payload;
    });
    addCase(fetchPosts.pending, state => {
      state.isLoadingPosts = true;
    });
    addCase(fetchPosts.rejected, (state, action) => {
      state.isLoadingPosts = false;
      state.error = action.payload as string;
    });
  },
});

export default postsSlice.reducer;
