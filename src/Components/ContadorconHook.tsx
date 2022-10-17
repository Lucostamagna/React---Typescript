import { useState, useSyncExternalStore } from "react"
import useCounter from '../Hooks/useCounter';

const ContadorconHook = () => {
  const{ valor, acumular} = useCounter();
  return (
  <>
  <h3> CONTADOR CON HOOK:</h3>  <small> {valor} </small>

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

export default ContadorconHook;
