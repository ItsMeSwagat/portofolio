import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import UIUX from "./components/UIUX";
import { useState } from "react";
import UC from "./components/UnderConstruction";
import Timeline from "./components/Timeline";

function App() {
  const [UnderConstruction, setUnderConstruction] = useState(false);

  return (
    <div className="App">
      {UnderConstruction === false ? (
        <div>
          <Header />
          <About />
          <Timeline />
          <Project />
          <UIUX />
          
          <Contact />
          <Footer />
        </div>
      ) : (
        <UC />
      )}
    </div>
  );
}

export default App;
