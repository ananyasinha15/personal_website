import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Education } from './components/Education';
import { Project } from './components/Project';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Project />
      <Experience />
      <Education/>
      <Contact />
    </div>
  );
}

export default App;
