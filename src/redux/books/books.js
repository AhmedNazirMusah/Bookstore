import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import uuid from 'react-uuid';
import axios from 'axios';

export const CREATE_BOOK = 'bookstore/books/CREATE_BOOK';
export const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
export const GET_BOOKS = 'bookstore/books/GET_BOOKS';

const appid = 'lMwcH8GNEsTd4Nz9hzwh';
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';

export const getBooksThunk = createAsyncThunk(GET_BOOKS, async () => {
  const response = await axios.get(`${baseUrl}/${appid}/books`);
  const res = response.data;
  return Object.keys(res).map((key) => ({
    id: key,
    ...res[key][0],
  }));
});

export const createBookThunk = createAsyncThunk(
  CREATE_BOOK,
  async (
    newBook,
    thunkAPI,
  ) => {
    const book = {
      item_id: uuid(),
      title: newBook.title,
      author: newBook.author,
      category: newBook.category,
    };
    await axios.post(`${baseUrl}/${appid}/books/`, book)
      .then(() => { thunkAPI.dispatch(getBooksThunk()); })
    // eslint-disable-next-line no-console
      .catch((error) => { console.log(error); });
    return thunkAPI.getState().books;
  },
);

export const removeBookThunk = createAsyncThunk(REMOVE_BOOK, async (bookId, thunkAPI) => {
  await axios.delete(`${baseUrl}/${appid}/books/${bookId}`)
    .then(() => { thunkAPI.dispatch(getBooksThunk()); })
    // eslint-disable-next-line no-console
    .catch((error) => { console.log(error); });
  return thunkAPI.getState().books;
});

const bookStoreSlice = createSlice((
  {
    name: 'bookstore',
    initialState: [],
    extraReducers: {
      [getBooksThunk.fulfilled]: (state, action) => action.payload,
      [createBookThunk.fulfilled]: (state, action) => action.payload,
    },
  }
));

export default bookStoreSlice.reducer;
