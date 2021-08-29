import React, { Component } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

class BookList extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ isLightTheme, light, dark }) => {
          const theme = isLightTheme ? light : dark;
          return (
            <div
              className="book-list"
              style={{ background: theme.bg, color: theme.syntax }}
            >
              <ul>
                <li style={{ background: theme.ui }}>The way you </li>
                <li style={{ background: theme.ui }}>This pary are awesome</li>
                <li style={{ background: theme.ui }}>The final empire</li>
              </ul>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default BookList;
