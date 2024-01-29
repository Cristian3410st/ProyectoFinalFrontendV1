import { useTasks } from "../../contexts/TasksContext"
import "../../public/styles/horarios.css"


function GetsSchedulePage(){

    const {getschedulesData, horarios,errors } = useTasks();

  const onsubmit = async () => {
      await getschedulesData();
  };

  
    return(
        <main className="contaniner">
          {
            errors.map((error,i)=>(
              <div key={i}>
                 {error}
              </div>
            ))
          }
          <section className="container_card">
             <button onClick={()=>{onsubmit()}} className="boton_horarios">validar horarios</button>
        </section>
        <div>
          {horarios ?(
              <table className="tablaGeneralUser">
                <thead className="thead">
                  <tr>
                    <th>username</th>
                    <th>dia</th>
                    <th>hora entrada asignada</th>
                    <th>salida asignada</th>
                    <th>hora entrada registrada</th>
                    <th>hola salida registrada</th>
                    <th>fecha</th>
                    <th>descanso</th>
                  </tr>
                </thead>
                <tbody>
                  {horarios.map((horario,index) =>(
                   <tr key={index} className="containerTable">
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
            <div></div>
          )}
        </div>
        <footer>
            </footer>
        </main>
    );
}


export default  GetsSchedulePage