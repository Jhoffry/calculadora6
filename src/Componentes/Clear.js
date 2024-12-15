import React from "react";
import '../Estilos/Clear.css';

function Clear({children, limpiar}){
  return(
    <div className="clear" onClick={() => limpiar('')}>{children}</div>
  )
}

export default Clear;