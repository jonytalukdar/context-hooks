import React, { useContext } from 'react';
import BookDetails from './BookDetails';
import { BookContext } from './contexts/BookContext';

const BookList = () => {
  const { books } = useContext(BookContext);

  return (
    <>
      {books.length ? (
        <div className="book-list">
          <ul>
            {books.map((book) => {
              return <BookDetails book={book} key={book.id} />;
            })}
          </ul>
        </div>
      ) : (
        <div className="empty">
          <h3>No Books To Read, Hello Free Time 😍</h3>
        </div>
      )}
    </>
  );
};

export default BookList;
