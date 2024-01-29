import {useForm} from "react-hook-form"
import {useAccess} from "../../contexts/AccessContex.jsx"
import {useNavigate} from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import "../../public/styles/login.css"


function LoginPage(){

    const {register,handleSubmit,formState:{errors}} = useForm();
    const {signin,isAuthenticated,errors:LoginErrors,user} = useAccess();
    const navigate = useNavigate();

   


    const onSubmit = handleSubmit(async (values) =>{
        signin(values)
      })

      useEffect(()=>{
        if(isAuthenticated && user.rol === "usuario")navigate("/user")
        else if(isAuthenticated && user.rol === "administrador")navigate("/admin")
        
      },[isAuthenticated,user])


 

      const hasformErros = Object.keys(errors).length > 0;


    return(

      <div className="home-body">
        <main className={`wrapper ${hasformErros ? "classErrors" : ""}`}>
           
        
              {
              LoginErrors.map((error,i)=>(
                <div key={i} className="ErrorRegister">
                  {error}
                </div>
              ))

        }
        <h2>Inicio de sesion</h2>
<form onSubmit={onSubmit}>
         <div className="input-container">
         <IoIosMail className="iconoLogin"/>
        <input type="email" 
        {...register("email",{required:true})}
        placeholder=""
        />
         <label className="label_class">Correo corporativo</label>
        </div>
        {
          errors.email &&(
            <p className="errosReactForm">
              El Correo corporativo es requerido
            </p>
          )
        }
        <div className="input-container">
        <RiLockPasswordFill className="iconoLogin"/>
        <input type="password"
        {...register("password",{required:true})}
        placeholder=" "
        />
         <label className="label_password">Contraseña</label>
        </div>
        {
          errors.password &&(
            <p className="errosReactForm">
              La contraseña es requerida
            </p>
          )
        }
        <div className="recordar">
        <label><input type="checkbox"></input>recordar mis credenciales</label>
        </div>
        <button type="submit" className="BotonLogin">iniciar sesión</button>
       </form>
       <footer>
       <p className="message">¿Eres un nuevo usuario?</p>
       <Link to="/register" className="enlaceRegister">Crear cuenta</Link>
       </footer>
        </main>
        </div>
       
    )
}



export default LoginPage