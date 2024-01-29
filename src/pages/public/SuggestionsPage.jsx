import React from "react"
import { useEffect } from "react"
import { useAccess } from "../../contexts/AccessContex"
import { useNavigate } from "react-router-dom"
import {useForm} from "react-hook-form"
import "../../public/styles/suggestion.css"
import { AiFillEdit } from "react-icons/ai";


function  SuggestionsPage () {

    const {isAuthenticated} = useAccess();
    const navigate = useNavigate();
    const {register,handleSubmit,formState:{errors}} = useForm();

    useEffect(()=>{
        if(isAuthenticated)navigate("/user")
    },[isAuthenticated])


    return(
        <body className="sugestionBody">
            <main>
              <section className="sectionSugerencias">
               <h4>
               En esta página, puede compartir sus sugerencias, dudas o peticiones para que las<br></br>
               tomemos en cuenta y así mejorar constantemente nuestro sistema día a día.
               </h4>

               <h4>ingrese sus sugerencias</h4>
               
               <div className="input-containerSugestion">
               <AiFillEdit className="iconoSugestion" />
               <input type="text"
                {...register("sugestion",{required:true})}
                placeholder=""
               />
                <label className="label_sug">Sugerencias</label>
               </div>
               <button className="BotonSugerencias">enviar</button>
              </section>
            </main>
        </body>
    )
}



export default  SuggestionsPage