/* eslint-disable react-hooks/exhaustive-deps */
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';
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
          <div className="progress">
            <div className="oval" />
            <CircularProgressbar className="loader" value={Math.floor(Math.random() * 100)} text={`${Math.floor(Math.random() * 100)}%`} />
          </div>
          <div className="chapter">
            <h4>Current Chapter</h4>
            <h5>Chapter 02</h5>
            <button className="chapter--button b-color" type="button">IN PROGRESS</button>
          </div>
        </div>
      ))}

      <Addbook />
    </>
  );
};

export default Book;
