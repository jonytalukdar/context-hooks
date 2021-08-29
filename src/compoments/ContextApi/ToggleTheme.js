import React, { Component } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

class ToggleTheme extends Component {
  render() {
    const { toggleTheme, isLightTheme } = this.context;
    return (
      <button onClick={toggleTheme}>{isLightTheme ? 'Dark' : 'Light'}</button>
    );
  }
}

ToggleTheme.contextType = ThemeContext;

export default ToggleTheme;
