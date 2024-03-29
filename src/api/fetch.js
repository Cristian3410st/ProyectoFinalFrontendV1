const apiURL = "https://backendsubdomain.mgdtbackednv1.online/api"

//const apiURL = "http://localhost:3000/api"

export const RegisterPost = async (user) => {
    try {
        const response  = await fetch(`${apiURL}/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
            credentials: 'include'
        });
        
        
        const data = await response.json();
        return { status: response.status, data: data };
       
        }catch(error){
            console.error('Error en la solicitud:', error);
            return { status: 500, data: null, error: error.message };
        }
    
       
    
}



export const LoginPost = async (user) => {
  try {
      const response = await fetch(`${apiURL}/login`, {
          method: "POST",
          headers: {
              "content-type": "application/json"
          },
          body: JSON.stringify(user),
          credentials: "include"
      });

      const data = await response.json();

      if (response.status === 200) {
          const allCookies = document.cookie
          console.log('Token almacenado en cookies:', allCookies);
          console.log(allCookies);
      } else {
          console.error('Error en la solicitud:', data);
      }

      return { status: response.status, data: data };
  } catch (error) {
      console.error("error en la solicitud", error);
      return { status: 500, data: null, error: error.message };
  }
};



export const verifyTokenRequest = async (token) => {
  try {
   
    if (!token) {
    
      return { ok: false, data: null };
    }

    const response = await fetch(`${apiURL}/verify`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      credentials: 'include',
    });

    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    console.error('Error en la solicitud:', error);
    return { ok: false, data: null, error: error.message };
  }
};


export const logoutApi = async () => {
  try{
    const response = await fetch(`${apiURL}/logout`,{
      method:"POST",
      headers:{
        "content-type":"application/json",
      },
      credentials: "include"
    })
    
    const data =  await response.json();
    return {status:response.status,data:data}

  }catch(error){
    console.error(error)
  }
}