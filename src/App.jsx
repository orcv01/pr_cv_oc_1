import "./App.css";
import { useState } from "react";

import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience"
import More from "./components/More/More";
import { CV } from "./CV/Cv";


const { hero, education, experience, languages, 
  habilities, volunteer } = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <>
      <div className="App">
        <Hero hero={hero} />
        <About hero={hero} />
        
        <button onClick={() => setShowEducation(true)}>Education</button>
        <button onClick={() => setShowEducation(false)}>Experience</button>
        {showEducation ? (<Education education={education}/>) : 
        (<Experience experience={experience} />)}
        
        <More languages={languages} habilities={habilities} volunteer={volunteer}/>
      </div>
  </>
  )
}

export default App
