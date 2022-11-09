import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createBook } from '../redux/books/books';

const Addbook = () => {
  const [bookDetail, setBookDetail] = useState({ title: '', author: '' });
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const titleInput = document.querySelector('.input-text');
    const authorInput = document.querySelector('.input-text2');

    if (titleInput.value !== '' && authorInput.value !== '') {
      dispatch(createBook(books.length + 1, bookDetail.title, bookDetail.author));
    }

    titleInput.value = '';
    authorInput.value = '';
  };

  const handleInputValues = (e) => {
    setBookDetail({
      ...bookDetail,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form>
        <h3>Add New Book</h3>
        <input
          type="text"
          className="input-text"
          placeholder="Add Title..."
          name="title"
          onChange={handleInputValues}
        />
        <input
          type="text"
          className="input-text2"
          placeholder="Add Author"
          name="author"
          onChange={handleInputValues}
        />
        <button type="submit" onClick={handleSubmit}>
          submit
        </button>
      </form>
    </div>
  );
};

export default Addbook;
