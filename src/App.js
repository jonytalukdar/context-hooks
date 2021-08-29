import BookList from './compoments/BookList';
import ThemeContextProvider from './compoments/contexts/ThemeContext';
import Navbar from './compoments/Navbar';
import ToggleTheme from './compoments/ToggleTheme';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
        <ToggleTheme />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
