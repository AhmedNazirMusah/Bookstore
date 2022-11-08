export const CREATE_BOOK = 'bookstore/books/CREATE_BOOK';
export const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

export const createBook = (book) => ({
  type: CREATE_BOOK,
  payload: book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  payload: book,
});

const booksreducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK: {
      const newstate = state.filter((book) => book.id !== action.payload.id);
      return newstate;
    }
    default:
      return state;
  }
};

export default booksreducer;
