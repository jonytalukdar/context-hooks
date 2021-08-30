import React, { Component, useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

const ToggleTheme = () => {
  const { toggleTheme, isLightTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>{isLightTheme ? 'Dark' : 'Light'}</button>
  );
};

export default ToggleTheme;
