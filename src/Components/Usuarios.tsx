import { reqResApi } from '../Api/reqRes';
import { useEffect, useRef, useState } from 'react';
import { ReqReslistado, Usuario } from '../Interfa/reqRes';


const Usuarios = () => {
    //_______
    const [usuarios, setUsuarios]=useState<Usuario[]>([]);
    const paginaRef =useRef(1)

 useEffect(()=>{
 cargarUsuarios();
 },[])



 const cargarUsuarios = async()=>{
    const resp = await reqResApi.get<ReqReslistado>('/users', {
        params:{
            page:paginaRef.current
        }
    })


if(resp.data.data.length >0){
    setUsuarios(resp.data.data);
    paginaRef.current ++;
} else{
    alert('sin regristros')
}

 }
const renderItem = (usuario:Usuario)=>{
    return(
        <tr key={usuario.id.toString()}>
            <td>
               <img src={usuario.avatar} 
               alt={usuario.first_name}
               style={{
                width:50,
                borderRadius:100,
               }}/>
            </td>
            <td> {usuario.first_name}</td>
            <td>{usuario.email}</td>
        </tr>
    )
}




  return (
    <>
    <h3> Usuarios</h3>
    <table className="table">
        <thead>
            <tr>
                <th> Avatar </th>
                <th> Nombre </th>
                <th> Email</th>
            </tr>
        </thead>
        <tbody>
           {
            usuarios.map(renderItem)
           }
        </tbody>
    </table>
    <button
    className="btn btn-primary"
    onClick={cargarUsuarios}>
     Next
    </button>
    
    </>
  )
}

export default Usuarios
