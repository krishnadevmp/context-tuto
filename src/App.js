import './App.css';
import TodoPage from './components/TodoPage';
import { ThemeContextProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <TodoPage />
    </ThemeContextProvider>
  );
}

export default App;
