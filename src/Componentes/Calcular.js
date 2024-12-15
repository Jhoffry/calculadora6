import React from "react";
import '../Estilos/Calcular.css';

function Calcular({children, calculo}){
  return(
    <div className="calcular" onClick={()=> calculo()}>{children}</div>
  )
}

export default Calcular;