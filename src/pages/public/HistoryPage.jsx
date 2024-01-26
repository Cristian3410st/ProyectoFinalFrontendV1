import React from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAccess } from "../../contexts/AccessContex"

function HistoryPage(){

    const {isAuthenticated} = useAccess();
    const navigate = useNavigate();
    
    useEffect(()=>{
        if(isAuthenticated)navigate("/user")
    },[isAuthenticated])

    return(

        <div>
        <h1>nuestra historia</h1>
       </div>

    )


}


export default HistoryPage