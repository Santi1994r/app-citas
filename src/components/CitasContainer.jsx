import React from "react";
import "../styles/citasContainer.css";
import CitasCard from "./CitasCard";

function CitasContainer (props) {

  const colores = ['red', 'blue', 'yellow', 'green']
  return(
      <div className="containerCitas" style={{backgroundColor: `${colores[Math.floor( Math.random() * 3 )]}`}}>
        <CitasCard />  
      </div>
  )
};

export default CitasContainer;