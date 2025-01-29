import React, { useState } from "react";

import { Ej02 } from "../Ej02";

//Componentes
/* function Mensaje(props) {
  const {valor,operaciones}=props;
  return (
    <div>
      <h1>{valor}</h1>
      <button onClick={operaciones}>Incrementar</button>
    </div>
  );
} */

export function Ej01() {
  const [variable, setVariable] = useState(5);
  //Arrow function
  const operacionesMult = () => {
    setVariable(variable + 1);
  };

  const stilos = {
    fondo: {
      backgroundColor: "black",
      color: "white",
    },
  };

  return (
    <div>
      <Ej02 valor={variable} operaciones={operacionesMult} stilos={stilos} />
    </div>
  );
}
