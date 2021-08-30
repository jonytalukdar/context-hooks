import React, { useContext } from 'react';
import { BookContext } from './contexts/BookContext';
import { ThemeContext } from './contexts/ThemeContext';

// class BookList extends Component {
//   render() {
//     return (
//       <ThemeContext.Consumer>
//         {({ isLightTheme, light, dark }) => {
//           const theme = isLightTheme ? light : dark;
//           return (
//             <div
//               className="book-list"
//               style={{ background: theme.bg, color: theme.syntax }}
//             >
//               <ul>
//                 <li style={{ background: theme.ui }}>The way you </li>
//                 <li style={{ background: theme.ui }}>This pary are awesome</li>
//                 <li style={{ background: theme.ui }}>The final empire</li>
//               </ul>
//             </div>
//           );
//         }}
//       </ThemeContext.Consumer>
//     );
//   }
// }

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { books } = useContext(BookContext);

  return (
    <div
      className="book-list"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <ul>
        {books.map((book) => (
          <li key={book.id} style={{ background: theme.ui }}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
