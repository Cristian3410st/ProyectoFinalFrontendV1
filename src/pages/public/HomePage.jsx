import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../public/styles/home.css"
import {useAccess} from "../../contexts/AccessContex"

function HomePage(){

  const {isAuthenticated} = useAccess()
  const navigate = useNavigate()
  


  useEffect(()=>{
    if(isAuthenticated) navigate("/admin")
  },[isAuthenticated])
  

    return(
        <div className="home">
            <h1>Pagina de inicio</h1>
        </div>
    )
}

export default HomePage