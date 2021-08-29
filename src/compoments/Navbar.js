import React, { Component } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ isLightTheme, light, dark }) => {
          const theme = isLightTheme ? light : dark;
          return (
            <nav style={{ backgroundColor: theme.ui, color: theme.syntax }}>
              <h2>Context-App</h2>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

Navbar.contextType = ThemeContext;

export default Navbar;
