import React from "react";
import "./More.css";

const More = ({ languages, habilities, volunteer }) => {

return (
<div>
  <div className="card"> 
   <h2>Languages</h2>
      <p>{languages.language}</p>
      <p>Escrito {languages.wrlevel}</p>
      <p>Hablado {languages.splevel}</p>
    <ul>
      <h2>Habilities</h2>
        {habilities.map((hability) => (
          <li key={hability}>{hability}</li>
        ))}
     </ul>
    <h2>Volunteer</h2>
      {volunteer.map((item) => (
      <div key={JSON.stringify(item)}>
          <p>{item.where}</p>
          <p>{item.name}</p>
          <p>{item.description}</p>
       </div>
      ))}
  </div>
</div>
);
};

export default More;

