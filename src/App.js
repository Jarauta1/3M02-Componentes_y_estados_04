import {useState} from "react"

function App() {

  let [numero, setNumero] =  useState(0)

  function sumar() {
    setNumero(numero+1)
  }
  return (<>
  <h1>{numero}</h1>
  <button onClick={sumar}>Añadir</button>
  </>)
}

export default App;
