import "../../public/styles/admin.css"
import imagen1 from "../../public/images/admin.jpg"
import imagen2 from "../../public/images/marga.jpg"
import {useTasks} from "../../contexts/TasksContext"



function AdminPage(){

    const {postExit,postEntry,markstart,markEnd,getUsers,userGet} =useTasks()

    
    const handleEntry = () => {
        postEntry()
    }
    const handleExit = () =>{
     postExit()
    }

    const handleUsers = async () => {
        await getUsers()
       
    }


   return(
    <main className="container_admin">
        <section className="sectionPrim">
        <article className="card">
            <div className="overflow">
           <img src={imagen1} className="imagen"></img>
           </div>
           <div className="mensaje">
            {
            markstart ? <p>su hora de entrada es:{markstart}</p>:<p>Al presionar el botón, podrá visualizar su hora de entrada.</p>
            }
           </div>
           <button onClick={handleEntry} className="botonEntrada">Registar hora de entrada</button>
        </article>

        <article className="card">
            <div className="overflow">
            <img src={imagen2} className="imagen"></img>
            </div>
            <div className="mensaje">
            {
                markEnd ? <p>su hora de entrada es:{markEnd}</p>:<p>Al presionar el botón, podrá visualizar su hora de salida.</p>
            }
            </div>
            <button onClick={handleExit} className="botonSalida">Registar hora de Salida</button>
        </article>

        </section>

          
        <section className="section_box">
            <h4>Consulte los usuarios registrados en el sistema</h4>
            <button onClick={handleUsers} className="constUserBoton">Consultar usuarios registrados</button>
            <article>
    {
        userGet ? (
            
            
              <table className="tablaUsers">
            <thead>
                <tr>
                    <th>username</th>
                    <th>nombres y apellidos</th>
                    <th>edad</th>
                    <th>correo corporativo</th>
                    <th>cargo</th>
                    <th>supervisor encargado</th>
                    <th>rol nombre</th>
                </tr>
            </thead>
             <tbody>
               {userGet.map((user,index)=>(
                <tr key={index}>
                  <td>{user.username}</td>
                  <td>{user.nombresYapellidos}</td>
                  <td>{user.Edad}</td>
                  <td>{user.correoCorporativo}</td>
                  <td>{user.Cargo}</td>
                  <td>{user.supervisorEncargado}</td>
                  <td>{user.rol_nombre}</td>
                </tr>
               ))}
             </tbody>
              </table>

        ) : (
            <p>al presionar el boton,podra visualizar<br/>
            los usuarios registrados en el sistema</p>
        )
    }
</article>
        </section>
    </main>
   )
}



export default AdminPage




