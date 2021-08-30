import React, { Component, useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';

import { ThemeContext } from './contexts/ThemeContext';

// class Navbar extends Component {
//   render() {
//     return (
//       <AuthContext.Consumer>
//         {({ isAuthenticated, toggleAuth }) => {
//           return (
//             <ThemeContext.Consumer>
//               {({ isLightTheme, light, dark }) => {
//                 const theme = isLightTheme ? light : dark;
//                 return (
//                   <nav
//                     style={{ backgroundColor: theme.ui, color: theme.syntax }}
//                   >
//                     <h2>Context-App</h2>
//                     <div onClick={toggleAuth}>
//                       {isAuthenticated ? 'Logged In ' : 'Logged Out'}
//                     </div>
//                     <ul>
//                       <li>Home</li>
//                       <li>About</li>
//                       <li>Contact</li>
//                     </ul>
//                   </nav>
//                 );
//               }}
//             </ThemeContext.Consumer>
//           );
//         }}
//       </AuthContext.Consumer>
//     );
//   }
// }

const Navbar = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ backgroundColor: theme.ui, color: theme.syntax }}>
      <h2>Context-App</h2>
      <div onClick={toggleAuth}>
        {isAuthenticated ? 'Logged In ' : 'Logged Out'}
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
