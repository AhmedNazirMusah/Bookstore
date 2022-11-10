import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBookThunk } from '../redux/books/books';

const Addbook = () => {
  const [bookDetail, setBookDetail] = useState({ title: '', author: '', category: '' });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const titleInput = document.querySelector('.input-text');
    const authorInput = document.querySelector('.input-text2');
    const categoryInput = document.querySelector('.category');

    if (titleInput.value !== '' && authorInput.value !== '' && bookDetail.category) {
      dispatch(createBookThunk(bookDetail));
    }

    titleInput.value = '';
    authorInput.value = '';
    categoryInput.value = '';
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
        <select value={bookDetail.category} onChange={handleInputValues} name="category" className="category">
          <option value="History">Romance</option>
          <option value="Romance">History</option>
          <option value="Mystery">Technology</option>
          <option value="Science">Science</option>
          <option value="Technology">Mystery</option>
        </select>
        <button type="submit" onClick={handleSubmit}>
          submit
        </button>
      </form>
    </div>
  );
};

export default Addbook;
