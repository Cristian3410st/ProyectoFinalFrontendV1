import {useForm} from "react-hook-form"
import { useTasks } from "../../contexts/TasksContext";
import "../../public/styles/horariosAdmin.css"
import { FaUser } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { CgCalendarDates } from "react-icons/cg";
import { MdBedtime } from "react-icons/md";
import { RiTimeFill } from "react-icons/ri";
import { RiRestTimeFill } from "react-icons/ri";
import { FaSun } from "react-icons/fa";
import {asignarHorarios} from "../../api/Tasks.js"
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { MdTipsAndUpdates } from "react-icons/md";

function HorariosAlterPage(){

    const{register:consultaRegistro,handleSubmit:handleSubmitConsult} = useForm();
    const{register:modifiacionRegistro,handleSubmit:handleSubmitModify} = useForm();
    const{register:asigacionRegistro,handleSubmit:handleSubmitAsing} = useForm();
    const{register:descanso,handleSubmit:handleSubmitRest} = useForm();

    const {findUsernames,horariosAdmin,modifyfindUsernames,errors,restPost} = useTasks();
     
    const onSubmit = handleSubmitConsult(async(values)=>{
        console.log(values)
        findUsernames(values)
    })
    
    const onsubmitModify = handleSubmitModify(async(values)=>{
        console.log(values) 
        modifyfindUsernames(values) 
    })

     const onsubmitAsing = handleSubmitAsing(async(values)=>{
      console.log(values)
      await asignarHorarios(values)
      
     })

     const onSubmitRest = handleSubmitRest(async(values)=>{
      console.log(values)
      await restPost(values)
     })

  

    return(
        <main className="body_container">
          <section className="CONTENEDORES_PRIMARIOS">
            <article className="containerUser">
              <h4>Consulta de horarios</h4>
       <h4>Ingresa el nombre de usuario del empleado para consultar su horario</h4>
      <form onSubmit={onSubmit}>
    <div className="contenedorInputGen">
    <FaUser className="icono"/>
     <input type="text"
     {...consultaRegistro("username",{required:true})}
     placeholder=""
     />  
       <label>nombre de usuario</label>
         </div>
    <button className="BotonConsulta">consultar</button>
    </form>
    </article>
    <article className="container_rest">
        <h4>Asignacion dia de descanso</h4>
        <h4>Ingresa el dia de descanso que desees para cualquier usuario</h4>
        <form onSubmit={onSubmitRest}>
        {
                  errors.map((error,i) =>(
                    <div key={i} className="passErrorsHorarios">
                      {error}
                    </div>
                  ))
                }
          <div className="contenedorInputGen">
          <FaUser className="icono"/>
       <input type="text"
       {...descanso("username",{required:true})}
       placeholder=""
       />
       <label>nombre de usuario</label>
       </div>

       <div className="contenedorInputGen">
       <MdDateRange className="icono" />
       <input type="text"
        {...descanso("diaDescanso",{required:true})}
        placeholder=""
       />
          <label>dia de descanso</label>
          </div>


          <div className="contenedorInputGen">
          <RiRestTimeFill className="icono" />
       <input type="text"
         {...descanso("fechaDescanso",{required:true})}
         placeholder=""
       />
          <label>fecha de descanso</label>
          </div>
       <button className="BotonConsulta">asignar descanso</button>
        </form>
    </article>
       </section>
     <div>
        {horariosAdmin ?(
         <table className="contenedorHorarios">
            <thead>
                <tr>
                    <th>username</th>
                    <th>dia</th>
                    <th>hora entrada asignada</th>
                    <th>hora salida asignada</th>
                    <th>hora entrada registrada</th>
                    <th>hora salida registrada</th>
                    <th>fecha</th>
                    <th>descanso</th>
                </tr>
            </thead>
            <tbody>
               {horariosAdmin.map((horario,index)=>(
                    <tr key={index}>
                     <td>{horario.username}</td>
                     <td>{horario.diaSemana}</td>
                     <td>{horario.horaEntradaAsignada}</td>
                     <td>{horario.horaSalidaAsignada}</td>
                     <td>{horario.horaEntradaRegistrada}</td>
                     <td>{horario.horaSalidaRegistrada}</td>
                     <td>{horario.fecha}</td>
                     <td>{horario.descanso}</td>
                    </tr>
               ))}
            </tbody>
         </table>
        ):(
            <p></p>           
        )}
        </div>
         <section className="sectionContenedor">

    <article className="containerModify">
          <h4>Modificacion Individual de Horarios</h4>
        <h4>
            Ingresa el nombre del usuario y confirma el día de la semana<br/>
            que deseas modificar. Luego, proporciona la hora de entrada<br/>
            y salida que deseas modificar.
        </h4>
    <form onSubmit={onsubmitModify}>
        <div className="contenedorInputGen">
        <FaUser className="icono"/>
        <input type="text"
        {...modifiacionRegistro("username",{required:true})}
        placeholder=""
        />
        <label className="labelUsuario">usuario</label>
      </div>

      <div className="contenedorInputGen">
      <MdDateRange className="icono" />
        <input type="text"
        {...modifiacionRegistro("diaSemana",{required:true})}
        placeholder=""
        />
        <label className="diaSemanaLabel">diaSemana</label>
      </div>

      <div className="contenedorInputGen">
      <FaSun className="icono" />
        <input type="text"
        {...modifiacionRegistro("horaEntradaAsignada",{required:true})}
        placeholder=""
        />
        <label className="inicioLabel">horaEntradaAsignada</label>
      </div>

      <div className="contenedorInputGen">
      <MdBedtime className="icono"/>
        <input type="text"
        {...modifiacionRegistro("horaSalidaAsignada",{required:true})}
        placeholder=""
        />
        <label className="finalLabel">horaSalidaAsignada</label>
      </div>

      <div className="contenedorInputGen">
      <RiTimeFill className="icono" />
        <input type="text"
        {...modifiacionRegistro("horaEntradaRegistrada",{required:true})}
        placeholder=""
        />
        <label className="labelSalida">horaEntradaRegistrada</label>
      </div>

      <div className="contenedorInputGen">
      <RiRestTimeFill className="icono" />
        <input type="text"
        {...modifiacionRegistro("horaSalidaRegistrada",{required:true})}
        placeholder=""
        />
        <label className="labelHoraEntrada">horaSalidaRegistrada</label>
      </div>

      
      <div className="contenedorInputGen">
      <CgCalendarDates className="icono" />
        <input type="text"
        {...modifiacionRegistro("fecha",{required:true})}
        placeholder=""
        />
        <label className="labelFecha">fecha</label>
      </div>


      <button className="BotonConsulta">modificar Datos</button>
    </form>
    </article>

    <article className="containerAsingModify">
     <h4>Asignación Individual de Horarios</h4>
     <h4>
     Realiza la asignación individual de horarios para un usuario específico. Ingresa el nombre de usuario
    y proporciona los detalles del horario que deseas asignar.
     </h4>
     <form onSubmit={onsubmitAsing}>

     {
                  errors.map((error,i) =>(
                    <div key={i} className="passErrors">
                      {error}
                    </div>
                  ))
                }
      <div className="contenedorInputGen">
        <FaUser className="icono "/>
        <input type="text"
        {...asigacionRegistro("username",{required:true})}
        placeholder=""
        />
        <label className="user2label">usuario</label>
      </div>

      <div div className="contenedorInputGen">
      <CgCalendarDates className="icono" />
       <select  {...asigacionRegistro("diasLaborales",{required:true})} 
        placeholder=""
       >
        <option value="" className="option">selecione los dias laborales</option>
        <option values="lunesViernes" className="option">lunes a domingo</option>

       </select>
      </div>

      <div div className="contenedorInputGen">
      <RiTimeFill className="icono" />
        <input type="text" 
         {...asigacionRegistro("entradaAsignada",{required:true})}
         placeholder=""
         />

        <label className="label5">hora de entrada asiganada</label>
      </div>

      <div className="contenedorInputGen">
      <RiRestTimeFill className="icono" />
        <input type="text"
           {...asigacionRegistro("salidaAsignada",{required:true})}
           placeholder=""
        />

        <label className="label5">hora de salida asignada</label>
      </div>

      <div className="contenedorInputGen">
      <MdOutlineTipsAndUpdates className="icono" />
        <input type="text"
        {...asigacionRegistro("fechaInicio",{required:true})}
        placeholder=""
        />
        <label className="label6">fecha inicio asigancion</label>
      </div>

      <div className="contenedorInputGen">
      <MdTipsAndUpdates className="icono"/>
        <input type="text"
        {...asigacionRegistro("fechaFin",{required:true})}
        placeholder=""
        />
        <label className="label6">fecha fin asigacion</label>
        
      </div>
         <button className="BotonConsulta">asignar Horarios</button>
     </form>
    </article>
        </section>
        </main>

    )
}


export default HorariosAlterPage;

