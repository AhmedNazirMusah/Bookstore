import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import Addbook from './addbook';
// import Bookitem from './bookitem';

const Book = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  return (
    <>
      {books.map((book) => (
        <div key={book.id} className="card">
          <div className="book--info">
            <h1>{book.title}</h1>
            <p>{book.author}</p>
            <ul className="book--utils">
              <button
                type="button"
              >
                Comment
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.preventDefault();
                  dispatch(removeBook(book.id));
                }}
              >
                Remove
              </button>
              <button
                type="button"
              >
                Edit
              </button>
            </ul>
          </div>
        </div>
      ))}

      <Addbook />
    </>
  );
};

export default Book;
