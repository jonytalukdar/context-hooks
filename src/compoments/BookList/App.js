import React from 'react';
import AddBookForm from './AddBookForm';
import BookList from './BookList';
import './index.css';
import BookContextProvider from './contexts/BookContext';
import Navbar from './Navbar';

const App = () => {
  return (
    <div className="app">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <AddBookForm />
      </BookContextProvider>
    </div>
  );
};

export default App;
