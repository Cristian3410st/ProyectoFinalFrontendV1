import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {useAccess} from "../../contexts/AccessContex"


function HelpPage(){

    const {isAuthenticated} = useAccess()
    const navigate = useNavigate()

    useEffect(()=>{
        if(isAuthenticated)navigate("/admin")
    },[isAuthenticated])

    return(

        <div>
        <h1>Pagina de ayuda</h1>
       </div>

    )


}


export default HelpPage