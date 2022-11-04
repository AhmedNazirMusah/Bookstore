import Bookitem from './bookitem';
import Addbook from './addbook';

const Book = () => {
  const books = [{ id: 1, bookTitle: 'Walking Dead', bookAuthor: 'Esther Morgan' }, { id: 2, bookTitle: 'React Hooks', bookAuthor: 'Justice' }];
  return (
    <>
      {books.map(({ bookTitle, bookAuthor, id }) => (
        <Bookitem key={id} bookTitle={bookTitle} bookAuthor={bookAuthor} />
      ))}
      <Addbook />
    </>
  );
};

export default Book;
