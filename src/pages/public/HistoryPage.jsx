import React from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAccess } from "../../contexts/AccessContex"
import "../../public/styles/History.css"

function HistoryPage(){

    const {isAuthenticated} = useAccess();
    const navigate = useNavigate();
    
    useEffect(()=>{
        if(isAuthenticated)navigate("/user")
    },[isAuthenticated])

    return(

        <body className="historyBody">
            <main>
        <article className="articleHistoria">
          
                <h1>Como nacio la idea de mgdt?</h1>
                 <p>
                 La concepción de MGDT surgió como respuesta a una necesidad identificada en la<br/>
                 empresa donde actualmente trabaja el desarrollador de este sistema. Es importante <br/>
                 destacar que la idea tomó forma al cumplir con los respectivos lineamientos y <br/>
                 evidencias solicitadas por el programa de formación en análisis y desarrollo de <br/>
                 software. Este programa exigía la creación de un sistema que pudiera satisfacer <br/>
                 necesidades específicas y cumplir con estándares establecidos por el Servicio<br/>
                 Nacional de Aprendizaje SENA. 
                 <br/>
                 <br/>
                 Tras identificar estos lineamientos utilizando diversas herramientas proporcionadas <br/>
                 por el SENA, como entrevistas, listas de chequeo, informes de recolección de <br/>
                 información y matrices de trazabilidad, se obtuvo la aprobación tanto de la empresa <br/>
                 actual como del SENA. Este respaldo permitió visualizar la viabilidad de desarrollar un <br/>
                 sistema o software que abordara estas necesidades y optimizara procesos dentro de <br/>
                 la empresa Comfica Soluciones Integrales.
                 <br/>
                 <br/>
                 De esta manera, se gestó la idea de crear un sistema para el registro de entradas y <br/>
                 salidas, así como para la consulta y asignación de horarios, además de la gestión e  <br/>
                 información de empleados.
                 </p>
        </article>
        </main>
       </body>

    )


}


export default HistoryPage