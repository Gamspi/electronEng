import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk(
  'general/fetchPosts',
  async (_, {rejectWithValue, dispatch}) => {
      console.log('dispatch')
      return []
    // try {
    //   return await GetService.apiRequest<Post[]>('/general', {});
    // } catch (e) {
    //   return rejectWithValue('Ошибка запроса постов!');
    // }
  },
);

export default {fetchPosts};
