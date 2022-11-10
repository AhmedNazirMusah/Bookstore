/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBookThunk, getBooksThunk } from '../redux/books/books';
import Addbook from './addbook';

const Book = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksThunk());
  }, []);

  return (
    <>
      {books.map((book) => (
        <div key={book.id} className="card">
          <div className="book--info">
            <h2>{book.category}</h2>
            <h1>{book.title}</h1>
            <p>{book.author}</p>
            <ul className="book--utils">
              <button
                type="button"
              >
                Comment
              </button>
              <button
                id={book.id}
                type="button"
                onClick={(event) => {
                  event.preventDefault();
                  dispatch(removeBookThunk(event.target.id));
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
