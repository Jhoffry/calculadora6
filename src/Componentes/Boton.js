import React from "react";
import '../Estilos/Boton.css';

function Boton({children, numero, contador}){
  return(
    <div className="boton" onClick={()=> contador(valor => valor + numero)}>
      {children}
    </div>
  )
}

export default Boton;