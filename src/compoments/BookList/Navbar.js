import React, { useContext } from 'react';
import { BookContext } from './contexts/BookContext';

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Best Book Reading</h1>
      <p>You have {books.length} Books to get through</p>
    </div>
  );
};

export default Navbar;
