import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {useAccess} from "../../contexts/AccessContex"

function ContactPage(){

    const {isAuthenticated} = useAccess()
    const navigate = useNavigate()

    useEffect(()=>{
        if(isAuthenticated)navigate("/user")
    },[isAuthenticated])

    return(

        <div>
        <h1>contactanos</h1>
       </div>

    )


}


export default ContactPage