export const CREATE_BOOK = 'bookstore/books/CREATE_BOOK';
export const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

export const createBook = (bookId, bookTitle, bookAuthor) => ({
  type: CREATE_BOOK,
  id: bookId,
  title: bookTitle,
  author: bookAuthor,
});

export const removeBook = (bookid) => ({
  type: REMOVE_BOOK,
  id: bookid,
});

const initialState = [
  { id: 1, title: 'The Abode of peace', author: 'Micheal Arthur' },
  { id: 2, title: 'Daarul Salaam', author: 'Love Nuamah' },
  {
    id: 3,
    title: 'Rings of Alxima',
    author: 'Bob white',
  },
];

const booksreducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, { id: action.id, title: action.title, author: action.author }];
    case REMOVE_BOOK: {
      const newstate = state.filter((book) => book.id !== action.id);
      return newstate;
    }
    default:
      return state;
  }
};

export default booksreducer;
