import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {useAccess} from "../../contexts/AccessContex"
import "../../public/styles/homepage.css"

function HomePage(){

  const {isAuthenticated} = useAccess()
  const navigate = useNavigate()
  


  useEffect(()=>{
    if(isAuthenticated) navigate("/user")
  },[isAuthenticated])
  

    return(
        <body className="home">
          <main className="mainInicio">
            <h1>Bienvenido a MGDT</h1>
            <p>Para acceder a las diversas opciones, simplemente<br/>
              diríjase al menú de navegación. Esperamos que su <br/>
              experiencia al explorar y utilizar las distintas funciones sea agradable.<br/>
            </p>
            </main>
        </body >
    )
}

export default HomePage