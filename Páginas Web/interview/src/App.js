import './App.css';
import RegistrationForm from './Form.tsx';
// import { useTheme } from './Theme.tsx';


function App() {

  /*const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );*/
  return (
    <div>
      <RegistrationForm/>
    </div>
  )
}

export default App;
