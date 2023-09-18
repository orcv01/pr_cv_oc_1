import "./App.css";
import { useState } from "react";

import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import More from "./components/More/More";
import { CV } from "./CV/Cv";


const { hero, education, experience, languages, 
  habilities, volunteer } = CV;

function App() {

  return (
    <>
      <div className="App">
      <Hero hero={hero} />
      <About about={about} />
    </div>

  </>
  )
}

export default App
