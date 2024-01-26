import react from "react"
import "../../public/styles/admin.css"
import imagen1 from "../../public/images/admin.jpg"
import imagen2 from "../../public/images/marga.jpg"
import {useTasks} from "../../contexts/TasksContext"


function AdminPage(){

    const {postExit,postEntry,markstart,markEnd} =useTasks()

    
    const handleEntry = () => {
        postEntry()
    }
    const handleExit = () =>{
     postExit()
    }


   return(
    <main className="container_admin">
        <section className="card">
            <div className="overflow">
           <img src={imagen1} className="imagen"></img>
           </div>
           <div className="mensaje">
            {
            markstart ? <p>su hora de entrada es:{markstart}</p>:<p>Al presionar el botón, podrá visualizar su hora de entrada.</p>
            }
           </div>
           <button onClick={handleEntry} className="botonEntrada">Registar hora de entrada</button>
        </section>

        <section className="card">
            <div className="overflow">
            <img src={imagen2} className="imagen"></img>
            </div>
            <div className="mensaje">
            {
                markEnd ? <p>su hora de entrada es:{markEnd}</p>:<p>Al presionar el botón, podrá visualizar su hora de salida.</p>
            }
            </div>
            <button onClick={handleExit} className="botonSalida">Registar hora de entrada</button>
        </section>
    </main>
   )
}



export default AdminPage




