import React, { useContext, useState } from 'react';
import { BookContext } from './contexts/BookContext';

const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const { addBook } = useContext(BookContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    addBook(title, author);

    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Book Name"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        required
        placeholder="Enter Author Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;
