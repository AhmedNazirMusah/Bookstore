import React from 'react';

const Addbook = () => (
  <div>
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
  </div>
);

export default Addbook;
