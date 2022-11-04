import Book from './book';

const AddBook = () => {
  const books = [{ id: 1, bookTitle: 'Walking Dead', bookAuthor: 'Esther Morgan' }, { id: 1, bookTitle: 'React Hooks', bookAuthor: 'Justice' }];
  return (
    <>
      {books.map(({ bookTitle, bookAuthor, id }) => (
        <Book key={id} bookTitle={bookTitle} bookAuthor={bookAuthor} />
      ))}
      <form>
        <h3>Add New Book</h3>
        <input
          type="text"
          className="input-text"
          placeholder="Add Title..."
          name="bookTitle"
        />
        <input
          type="text"
          className="input-text"
          placeholder="Add Author"
          name="bookTitle"
        />
        <button type="button">
          submit
        </button>
      </form>
    </>
  );
};

export default AddBook;
