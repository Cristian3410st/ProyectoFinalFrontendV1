import "../public/styles/Nav.css"
import {Link,useNavigate} from "react-router-dom"
import {useAccess} from "../contexts/AccessContex.jsx"
import { GiAbstract076 } from "react-icons/gi";

function NavBar(){

    const {isAuthenticated,logout,user,logoutapi2} = useAccess();
    const navigate = useNavigate();
  

    return(
        <>
        {isAuthenticated  && user.rol === "usuario" ?(
        <>
        <header className="headerUser">
        <div className="Usuarios">
             Bienvenido:{user.username}
         </div>
         <nav className="navUser">
        <ul className="ulAdmin">
        <li className="logo">
         <GiAbstract076 className="icono2"/>mgdt
         </li>
         <li>
            <Link to="/admin">menu</Link>
         </li>
        <li>
         <Link className="manualUsuario" to="/Manual">manual de Usuario</Link>
         </li>
       <li className="Horarios"><Link to="/getSchedule">Consultar Horarios</Link>
       </li>
      <li className="passwordNav"><Link to="/alterPassword" className="cambiaConraseña">cambiar contraseña</Link>
      </li>
         <button className="logout" onClick={()=>{logout(),logoutapi2()}}>Cerrar sesión</button>
         </ul>
         </nav>
          </header>
          </>
        ): isAuthenticated  && user.rol === "administrador" ?(
          <header className="headerUser">
            <div className="Usuarios">
               Bienvenido:{user.username}
            </div>
            <nav className="navUser">
               <ul className="ulAdmin">
               <li className="logo">
         <GiAbstract076 className="icono2"/>mgdt
              </li>
                  <li><Link to="">manual de usuario</Link></li>
                  <li><Link to="/horariosAlter">C&M Horarios</Link></li>
                  <li><Link to="/admin">menu</Link></li>
                  <li><Link to="/modifyPassword">cambiar contraseña</Link></li>
                  <button className="logout" onClick={()=>{logout(),logoutapi2()}}>Cerrar sesión</button>
               </ul>
            </nav>
          </header>
        ):(
         <header className="headerClient">
         <nav className="navClient">
       <ul className="listaNavegacionPublica">
         <li className="logoClient"><GiAbstract076 className="iconoClient"/>mgdt
         </li>
         <li>
            <Link to="/">Inicio</Link>
         </li>
         <li>
            <Link to="/help">Ayuda</Link>
         </li>
         <li>
            <Link to="/contact">Contactanos</Link>
         </li>
         <li>
            <Link to="/history">Nuestra historia</Link>
         </li>
         <li>
            <Link to="/Suggestions">Sugerencias</Link>
         </li>
         <button className="BotonAccesso" onClick={()=>{navigate("/login")}}>Acceder</button>
       </ul>
         </nav>
       </header>
       )}
        </>
    )
}



export default NavBar
