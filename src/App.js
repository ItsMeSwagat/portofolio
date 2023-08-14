import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project'
import Contact from './components/Contact';
import Footer from './components/Footer';
import UIUX from './components/UIUX';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Project />
      <UIUX />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
