import React from "react";
import "./About.css";

const About = ({ hero }) => {

return (
<div>
  <div className="card"> 
    <h2>About</h2>
    {hero.aboutMe.map((item) => {

    return (
      <div key={JSON.stringify(item)}>
        <p className="name">📕 {item.info}</p>
      </div>
    );
    })}
  </div>
</div>
);
};

export default About;

