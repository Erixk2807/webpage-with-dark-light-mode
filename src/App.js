import {useState} from "react"
import './App.css';
import Nav from './components/Nav';
import MainContent from './components/MainContent';

function App() {

  const [darkMode, setDarkMode] = useState(false)
  function toggleDarkMode() {
      setDarkMode((prevState) => !prevState)
  }

  return(
    <div className='App'>
    <Nav 
      toggleDarkMode={toggleDarkMode}
      darkMode={darkMode}
    />
      <MainContent 
      darkMode={darkMode}
      />
    </div>
  )
}

export default App;
