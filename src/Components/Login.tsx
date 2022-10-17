import { constants } from "fs/promises"
import { useEffect, useReducer } from "react"
//el objetivo de la interace es que typescript sepa como lucen los objetos
//-------------------------------------------------------------------
interface AunthState {
 validando : boolean;
 token: string | null;
 username:string;
 name:string;
}
//--------------------------------------------------------------------------------------

const initialState: AunthState={
    validando:true,
    token:null,
    username:'',
    name:''
}
 //-----------------------------------------------------------------------------------------------------------------------
type payloadLogin={
  username:string;
  name:string;
}
type AuthAction = 
  | { type: 'logout'}
  | {type:'login', payload: payloadLogin};

//---------------------------------------------------------------------------------------------------------------------------
const authReducer = ( state: AunthState , action: AuthAction): AunthState=>{
 switch (action.type) {
  case 'logout':
    return{
      validando:false,
      token:null,
      name:'',
      username:'',
    }
  case 'login':
    return{
      validando:false,
      token:'ABC123',
      name:action.payload.name,
      username:action.payload.username
    }
    
  default:
    return state; 
 }
}
//-------------------------------------------------------------------------------------------------------------------------
const Login = () => {//reducer=funcion para retornar un nuevo estado


 const [state, dispatch] = useReducer(authReducer, initialState);

     useEffect(()=>{
      setTimeout(()=>{
       dispatch({type:'logout'});
      }, 1500);
     }, []);

const login=()=>{
  dispatch({
    type:'login',
    payload: {
      name:'Lucia',
      username:'Costamagna'
    }
  })
}
const logout=()=>{
  dispatch({
    type:'logout',
  
  })
}

if(state.validando){
  return(
    <>
  <h3> Login</h3>
  <div className="alert alert-info"> 
  Validando ...
  </div>
    </>
  )
}


    return (
  <>

  <h3> Login</h3> {

    (state.token)
    ?  <div className="alert alert-success"> Autenticado como:{state.name}</div>
    : <div className="alert alert-danger"> No autenticados </div>
  } 
  
{
  (state.token)
  ?(
    <button className="btn btn-danger" onClick={logout}>
    Logout
      </button>
  ):
  (
    <button className="btn btn-primary" onClick={login}>
    Login
      </button>
  )
}
 

 


  </>
  )
}

export default Login
