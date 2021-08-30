import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: 'JavaScript is Awesome', id: 1 },
    { title: 'There is way to hide', id: 2 },
    { title: 'Some is Better than nothing', id: 3 },
    { title: 'JavaScript is Awesome', id: 4 },
  ]);

  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
