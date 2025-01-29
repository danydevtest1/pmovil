import React from 'react'

export function Ej02(props) {
 const {valor,operaciones,stilos} = props;
  
  return (
    <div style={stilos.fondo}>
      <h1>Resultado: {valor}</h1>
      <button onClick={operaciones}>Calcular</button>
    </div>
  )
}
