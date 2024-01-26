import React from "react";
import {useForm} from "react-hook-form"
import {useTasks} from "../../contexts/TasksContext"
import { RiLockPasswordLine } from "react-icons/ri";
import "../../public/styles/alterPass.css"



function AlterPasswordPage(){

  const {register,handleSubmit,formState:{errors}} = useForm();
  const {modifyPass} = useTasks();

   const onSubmit = handleSubmit((values) =>{
       modifyPass(values)
    })
    

    const hasformErros = Object.keys(errors).length > 0;

    return(

        <div className="contenedorPrincipal">
          <main className="Contenedor">
            <section>
            <form onSubmit={onSubmit} className={`contenedor_formulario ${hasformErros ? "classErrorsPass":""}`}>
            <h2 className="titulo">Cambiar contraseña</h2>
              <div className="contenedor_input">
             <input type="password"{...register ("contraseñaActual", {required:true} )}
              placeholder=""
             />
             <label className="contenedor_Label">contraseña actual</label>
             <RiLockPasswordLine className="iconoPass"/>
             </div>
             {
              errors.contraseñaActual &&(
                <p>los datos son requeridos</p>
              )
             }
             <div className="contenedor_input">
             <input type="password"{...register ("nuevaContraseña", {required:true} )}
              placeholder=""
             />
             <label className="contenedor_Label">Nueva contraseña</label>
             <RiLockPasswordLine className="iconoPass"/>
             </div>
             {
              errors.nuevaContraseña &&(
                <p>los datos son requeridos</p>
              )
             }
             <button type="submit" className="boton_contraseña">cambiar contraseña</button>
            </form>
            </section>
          </main>
        </div>

    )

}


export default AlterPasswordPage;
