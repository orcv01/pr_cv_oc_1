import "./Hero.css";
import React from "react";

const Hero = ({ hero }) => {
  return (
    <div className="hero">
      <img src={hero.image} alt="Avatar Perfil" />
      <div className="card">
        <h2>Hero</h2>
        <h2>{hero.name} {hero.lastname}</h2>
        <p>🗺{hero.city} </p>
        <p>🗓{hero.birthDate}</p>
  <p>📧<a href={"mailto:" + hero.email}>orcv01@gmail.com</a></p>
        <p>💾<a href={hero.gitHub}>GitHub orcv01</a></p>
      </div>
    </div>
  );
  };
  export default Hero;
  