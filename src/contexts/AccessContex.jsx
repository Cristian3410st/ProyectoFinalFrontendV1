import {createContext,useState,useContext, useEffect} from "react"
import Cookies from "js-cookie"
import {RegisterPost,LoginPost,verifyTokenRequest} from "../api/fetch.js"



export const AccessContext = createContext();

   

export const useAccess = () =>{
const context = useContext(AccessContext)
if(!context){
    throw new Error("el useAccess deberia estar dentro de un AccessProvider")
}
return context;
}


export const AccessProvider = ({children}) => {
    
    const[user,setUser] = useState(null)
    const[isAuthenticated,setIsAuthenticated] = useState(false)
    const [errors,setErrors] = useState([]);
    const [loading,setLoading] = useState(true)

 useEffect(()=>{
    if(errors.length>0){
        const timer = setTimeout(()=>{
            setErrors([]);
        },5000)
        return () => clearTimeout(timer)
    }
 },[errors])


 const signup = async (user) => {
  try{
    const {data,status} = await RegisterPost(user);
    if(status === 200){
      setIsAuthenticated(true)
      setUser(data)
      console.log(data)
    }else{
      setErrors(data)
      setIsAuthenticated(false)
      setUser(null)
    }
  }catch(error){
    console.error("error en la solicitud",error)
    setErrors("hubo un error en la solicitud por favor intentalo de  nuevo",data)
  }
    
  };


    const signin = async (user) => {

    try{
      const {data,status} = await LoginPost(user);
       if(status === 200){
        setIsAuthenticated(true)
        setUser(data)
        console.log(data)
        Cookies.set("userData",JSON.stringify(data))
       }else{
        setErrors(data)
        setUser(null)
        setIsAuthenticated(false)
       }
    }catch(error){
      console.error("error en la solicitud",error)
      setErrors("hubo un error en la solicitud por favor intentalo de  nuevo",data)
    }
  }

    
    

    const logout = () => {
        Cookies.remove("token")
        setUser(null)
        setIsAuthenticated(false)
    }

    
    useEffect(() => {
        const checkLogin = async () => {
          const cookies = Cookies.get();
          if (!cookies.token) {
            setIsAuthenticated(false);
            setLoading(false);
            return;
          }
    
          try {
            const res = await verifyTokenRequest(cookies.token);
            console.log(res);
            if (!res.data) return setIsAuthenticated(false);
            setIsAuthenticated(true);
            setUser(res.data);
            const userData = Cookies.get("userData");
            setUser(JSON.parse(userData));
            setLoading(false);
          } catch (error) {
            setIsAuthenticated(false);
            setLoading(false);
          }
        };
        checkLogin();
      }, []);
      
   
   

    return(
         <AccessContext.Provider value={{
            signup,
            user,
            isAuthenticated,
            errors,
            signin,
            loading,
            logout
         }}>
            {children}
         </AccessContext.Provider>
    )
}