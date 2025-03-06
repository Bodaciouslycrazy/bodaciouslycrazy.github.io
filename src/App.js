import './App.css';
import Bio from './Bio.js';
import Projects from './Projects.js'
import Contact from './Contact.js';
import NavBar from './NavBar.js';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Bio/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
