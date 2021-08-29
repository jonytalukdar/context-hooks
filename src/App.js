import BookList from './compoments/BookList';
import AuthContextProvider from './compoments/contexts/AuthContext';
import ThemeContextProvider from './compoments/contexts/ThemeContext';
import Navbar from './compoments/Navbar';
import ToggleTheme from './compoments/ToggleTheme';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ToggleTheme />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
