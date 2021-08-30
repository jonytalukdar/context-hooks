import React, { createContext, useReducer } from 'react';
import { reducer } from '../reducers/BookReducer';
export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(reducer, []);

  const addBook = (title, author) => {
    dispatch({
      type: 'ADD_BOOK',
      payload: { title, author, id: new Date().getTime() },
    });
  };

  const removeBook = (id) => {
    dispatch({ type: 'REMOVE_BOOK', payload: id });
  };

  return (
    <BookContext.Provider
      value={{ books, addBook: addBook, removeBook: removeBook }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
