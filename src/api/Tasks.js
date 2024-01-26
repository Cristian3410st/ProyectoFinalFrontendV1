//const apiURL = "https://backendsubdomain.mgdtbackednv1.online/api"

const apiURL = "http://localhost:3000/api"

export const getsSchedule = async () => {
   try{
    const response = await fetch(`${apiURL}/getsSchedule`,{    
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(),
        credentials:"include",
    
    });
     const data = await response.json();
     return {status:response.status,data:data}

   } catch(error){
    console.log("Error en la solicitud", error)
    return{status:500, data: null ,error:error.message}
   }
}



export const markEntry = async () => {
  try{
    const response = await fetch(`${apiURL}/markEntry`,{
        method:"POST",
        credentials:"include",
        headers:{
            "content-Type":"application/json",
        },
    })
    const data = await response.json();
    return { status: response.status, data:data };
  }catch(error){
    console.log(error)
  }
}


export const markExit = async () =>{

try{
    const response = await fetch(`${apiURL}/markExit`,{
      method:"POST",
      credentials:"include",
      headers:{
        "content-Type":"application/json"
    },
    })
    const data = await response.json();
    return{status:response.status, data:data}

}catch(error){
    console.log(error)
}
}




export const alterPassword = async (values) =>{

    try{
        const response =  await fetch( `${apiURL}/alterPassword`,{
            method:"POST",
            credentials:"include",
            headers:{
                "content-Type":"application/json",
            },
            body:JSON.stringify(values)
        })

        const data = await  response.json()

        return{data}

    }catch(error){
        console.log(error)
    }
    
}



export const buscarHorariosGen = async(values) =>{

    try{
       const response = await fetch(`${apiURL}/consultarHorarios`,{
        method:"POST",
        credentials:"include",
        headers:{
            "content-Type":"application/json",
        },
        body:JSON.stringify(values)
       })

        const data =  await response.json()

        return{data}
         
    }catch(error){
        console.log(error)
    }
}

export const modificarHorariosGen = async(values)=>{
    try{
        const response =  await fetch(`${apiURL}/modificarHorarios`,{
            method:"POST",
            credentials:"include",
            headers:{
                "content-Type":"application/json",
            },
            body:JSON.stringify(values)
        })

        const data = await response.json()

        return{data}

    }catch(error){
        console.log(error)
    }
}

export const asignarHorarios = async(values) =>{
    try{
        const response = await fetch(`${apiURL}/asignacionHorarios`,{
            method:"POST",
            credentials:"include",
            headers:{
                "content-Type":"application/json",
            },
            body:JSON.stringify(values)
        })
        

    }catch(error){
      console.log(error)
    }
}