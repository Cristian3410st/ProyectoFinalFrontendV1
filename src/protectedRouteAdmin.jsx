import React from "react";
import { useAccess } from "./contexts/AccessContex";
import {Navigate, Outlet} from "react-router-dom"


function ProtectedAdmin(){
    const {loading,isAuthenticated,user} = useAccess();
    if(loading) return <h1> Loading ... </h1>
    if(!loading && !isAuthenticated) return <Navigate to ="/login" replace/>;
    if(isAuthenticated && user.rol === "administrador"){
        return  <Outlet />;
    }else{
        return <Navigate to="login" replace/>;
    }
}


export default ProtectedAdmin;