import { configureStore } from '@reduxjs/toolkit';
import booksreducer from './books/books';
import categoryReducer from './categories/categories';

const store = configureStore({
  reducer: {
    books: booksreducer,
    categories: categoryReducer,
  },
});

export default store;
