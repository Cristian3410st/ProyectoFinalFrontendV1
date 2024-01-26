import React from "react";
import { useTasks } from "../../contexts/TasksContext";
import "../../public/styles/user.css"
import imagen1  from "../../public/images/fondo1.jpg"
import imagen2 from "../../public/images/fondo2.jpg"



function UserPage(){
    
 const {postExit,postEntry,markstart,markEnd} = useTasks();

    const handleEntry = () =>{
      postEntry()
    }
    const handleExit = () =>{
        postExit()
    }

    

    return(
    <main className="containerAdmin">

        <section className="cardEntry">
          <div className="overflow">
          <img className="entry" src={imagen1} alt="imagen1"></img>
          </div>
          <div className="mensaje">
          {
            markstart ? <p>su hora de entrada es: {markstart}</p>:<p>Al presionar el botón, podrá visualizar su hora de entrada.</p>
          }
          </div>
          <button onClick={handleEntry}className="BotonEntrada">Registar hora de entrada</button>
        </section>

        <section className="cardExit">
          <div className="overflow">
        <img className="exit " src={imagen2} alt="imagen2"></img>
        </div>
        <div className="mensaje">
          {
            markEnd ? <p>su hora de salida es: {markEnd}</p>:<p>Al presionar el botón, podrá visualizar su hora de salida.</p>
          }
          </div>
          <button onClick={handleExit} className="BotonSalida">Registrar hora de salida</button>
        </section>

    </main>
    )
}

export default UserPage