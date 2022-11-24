import { Link } from "react-router-dom";
import Actores from "./Practicaapi";
import ValidaCampos from "./Validacion";

function Login (){ 

     
     
     return (  
          <div> 
        <form clas="form" id="form">
            <br></br><label >Nombre:</label>
            <input  name= 'nombre' type="text" id="user"></input>
            <br></br><label >Mail:</label>
            <input name= 'apellido' type="email" id="email"></input>
            <br></br><label >Contraseña:</label>
            <input  name= 'contraseña' type="password" id="pasword"></input>
          <Link to="/practicaapi"> <button to="/practicaapi"  id="enviado" type="submit">Enviar</button></Link>
         </form> 
         </div>

    
   
         
     )
} 
 export default Login;