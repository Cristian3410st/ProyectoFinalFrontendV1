import {useForm} from "react-hook-form";
import { FaKey } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaIdCard } from "react-icons/fa";
import { FaPagelines } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { MdOutlineWork } from "react-icons/md";
import {Link,useNavigate} from "react-router-dom"
import "../../public/styles/register.css"
import {useAccess} from "../../contexts/AccessContex"
import { useEffect } from "react";


function RegisterAdminPage(){
   
    const {register,handleSubmit} = useForm();
    const {signup,isAuthenticated,user} = useAccess();
    const navigate = useNavigate();

    useEffect(()=>{
      if(isAuthenticated && user.rol ==="usuario")navigate("/user")
      else if(isAuthenticated && user.rol === "administrador")navigate("/admin")
      },[isAuthenticated,user])

    const onSubmit = handleSubmit(async (values)=>{
      console.log(values)
      signup(values)
    }) 

return(
<body className="body">
  <main className="wraper">
   <section className="form_box_register">
     <form className="" onSubmit={onSubmit}>
       <h2>Registrarse</h2>

       <p>
        Por favor, selecione el rol para el cual se quiere registrar.
       </p>
       <div className="input_box">
         <FaKey className="icon"/>
         <label className="labelPassword">selecione su rol:</label>
          <select {...register("rol",{required:true})}>
           <option value="administrador">administrador</option>
           <option value="usuario">usuario</option>
          </select>
       </div>
      <div className="input_box">
       <FaUser className="icon"/>
       <input type="text"
        {...register("username",{required:true})}
        placeholder=""
       />
           <label className="labelUser">Usuario</label>
      </div>
      <div className="input_box">
        <RiLockPasswordFill className="icon"/>
        <input type="password"
        {...register('password',{required:true})}
        placeholder=""
        />
            <label className="labelPassword">Contraseña</label>
      </div>

      <div className="input_box">
        <FaIdCard className="icon"/>
        <input type="text"
        {...register("nombresYapellidos",{required:true})}
        placeholder=""
        />
            <label className="labelNames">Nombres y apellidos</label>
      </div>

      <div className="input_box">
        <FaPagelines className="icon"/>
        <input type="number"
        {...register("Edad",{required:true})}
        placeholder=""
        />
            <label className="labelEdad">Edad</label>
      </div>

      <div className="input_box">
        <IoIosMail className="icon"/>
      <input type="email"
       {...register("email",{required:true})}
       placeholder=""
      />
          <label className="labelEmail">Correo corporativo</label>
      </div>

      <div className="input_box">
        <MdOutlineWork className="icon" />
      <input type="text"
        {...register("cargo",{required:true})}
        placeholder=""
      />
          <label className="LabelCargo">Cargo laboral</label>
      </div>

        <div className="input_box">
       <input type="text"
        {...register("text",{required:true})}
         placeholder=""
        />
          <label className="jefe">Jefe directo</label>
        </div>
      

      <div className="remember">
        <label><input type="checkbox"/>Recordar mis credeciales</label>
      </div>
      <Link to="/Login" className="loginRedirect">Ya se encuentra registrado?</Link>
      <button className="buton_register">Registrarse</button>
     </form>
   </section>
  </main>
</body>
)
}

export default RegisterAdminPage