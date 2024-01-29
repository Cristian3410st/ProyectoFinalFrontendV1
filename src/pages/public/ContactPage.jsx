import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {useAccess} from "../../contexts/AccessContex"
import "../../public/styles/contac.css"

function ContactPage(){

    const {isAuthenticated} = useAccess()
    const navigate = useNavigate()

    useEffect(()=>{
        if(isAuthenticated)navigate("/user")
    },[isAuthenticated])

    return(

        <body className="contacBody">
        <main>
             <article className="articleHelp">
                 <h4>si necesitas contactarte con nostros o necesitas soporte<br/>
                     del sistema puedes comunicarte a los siguientes numeros.
                    <p>moviles: 3058929333.</p>
                    <p>correo electronico: cristian3410st@gmail.com</p>
                    <p>correo electronico: cristian8090tokost@gmail.com</p>
                    <footer><p>el tiempo de respuesta estara entre 2 a 3 horas.</p></footer>
                 </h4>
                </article>
            </main>
       </body>

    )


}


export default ContactPage