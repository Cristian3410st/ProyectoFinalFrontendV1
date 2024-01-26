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
            <article className="containerHorarios">
              <table className="tablaGeneral">
                <thead className="thead">
                  <tr>
                    <th>id usuario</th>
                    <th>username</th>
                    <th>dia</th>
                    <th>hora entrada asignada</th>
                    <th>salida asignada</th>
                    <th>fecha</th>
                    <th>descanso</th>
                  </tr>
                </thead>
                <tbody>
                  {horarios.map((horario,index) =>(
                   <tr key={index} className="containerTable">
                    <td>{horario.id}</td>
                    <td>{horario.username}</td>
                    <td>{horario.diaSemana}</td>
                    <td>{horario.horaEntradaAsignada}</td>
                    <td>{horario.horaSalidaAsignada}</td>
                    <td>{horario.fecha}</td>
                    <td>{horario.indicadorDescanso}</td>
                   </tr>

                     ))}
                </tbody>
              </table>
            </article>
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