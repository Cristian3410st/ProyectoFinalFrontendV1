import React from "react"
import { useEffect } from "react"
import { useAccess } from "../../contexts/AccessContex"
import { useNavigate } from "react-router-dom"


function  SuggestionsPage () {

    const {isAuthenticated} = useAccess();
    const navigate = useNavigate();

    useEffect(()=>{
        if(isAuthenticated)navigate("/admin")
    },[isAuthenticated])


    return(
        <div>
            <h1>sugerencias</h1>
        </div>
    )
}



export default  SuggestionsPage