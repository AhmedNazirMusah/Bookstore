/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ bookTitle, bookAuthor }) => (
  <div>
    <h2>{bookTitle}</h2>
    <p>{bookAuthor}</p>
    <ul className="button-books">
      <li><button type="button">comment</button></li>
      <li><button type="button">delete</button></li>
      <li><button type="button">edit</button></li>
    </ul>
  </div>
);

Book.propTypes = {
  bookTitle: PropTypes.string.isRequired,
  bookAuthor: PropTypes.string.isRequired,
};

export default Book;
