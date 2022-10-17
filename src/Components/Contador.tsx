import { useState, useSyncExternalStore } from "react"

const Contador = () => {
   const [valor, setValor]= useState(10);

   const acumular = (numero: number)=>{
    setValor(valor + numero);
   }
  return (
  <>
  <h3> CONTADOR:</h3>  <small> {valor} </small>

  <button 
  className="btn-btn-primaty"
  onClick={()=>acumular(1)}> 
  +1</button>



  &nbsp;
  <button className="btn-btn-primaty"
  onClick={()=>acumular(-1)}
  >
     -1</button>
    </>
  )
}

export default Contador
