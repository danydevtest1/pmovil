import React, { useState } from "react";

export function Ej02(props) {
  const { valor, operaciones, stilos } = props;

  const datos = {
    nombre: "",
    curp: "",
  };

  const [values, setValues] = useState(datos);
  const [info, setInfo] = useState([])


  //console.log(value);

  //Arrow function
  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setInfo([...info,{nombre:values.nombre, curp:values.curp}])
  };

  return (
    <div style={stilos.fondo}>
      <form onSubmit={onSubmit}>
        <h2>Ingresar Nombre:</h2>{" "}
        <input
          name="nombre"
          value={values.nombre}
          type="text"
          onChange={onChange}
        />
        <h2>Ingresar CURP:</h2>{" "}
        <input
          name="curp"
          value={values.curp}
          type="text"
          onChange={onChange}
        />
        <button type="onSubmit">Mostrar</button>
      </form>

      {
        info.map((dato)=>(
          <p>
           <h1>Nombre: {dato.nombre}
            <br/>
           Curp: {dato.curp}</h1>
          </p>
        ))
      }
      
      <h1>Resultado: {valor}</h1>
      <button onClick={operaciones}>Calcular</button>
    </div>
  );
}
