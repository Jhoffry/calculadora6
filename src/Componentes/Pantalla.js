import React from "react";
import '../Estilos/Pantalla.css';

function Pantalla({children}){
    return(
      <div className="pantalla">{children}</div>
    )
}

export default Pantalla;