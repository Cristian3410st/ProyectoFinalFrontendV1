import { createContext,useContext,useState,useEffect } from "react";
import{useAccess} from "../contexts/AccessContex.jsx"
import {getsSchedule,markEntry,markExit,alterPassword,buscarHorariosGen,modificarHorariosGen} from "../api/Tasks.js"

const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);

    if(!context){
        throw new Error("useTasks must be used whithin a taskprovider")
    }

    return context;
}

export function TaskProvider({children}) {

    const{user} = useAccess();

    const [horarios,setHorarios]  = useState(null)
    const [markstart,getMarkStart] = useState(null)
    const [markEnd,getMarkEnd] = useState(null)
    const [errors,setErrors] = useState([])
    const [horariosAdmin,setHorariosAdmin]= useState(null)

    
     useEffect(()=>{
        if(errors.length>0){
           const timer = setTimeout(()=>{
            setErrors([])
           },5000)
           return () => clearTimeout(timer)
        } 
     },[errors])


     const getschedulesData = async () => {

        try{
        const res = await getsSchedule();
       if(res.status === 200){
        setHorarios(res.data)
       } else{
        setErrors(res.data)
       }
        }catch(error){
            console.log(error)
        }
     }


     const modifyPass = async (values) => {

        try{
            const res = await alterPassword({userId:user.id, ...values})
        }catch(error){
            console.log(error)
        }
         
     }

     const findUsernames = async (values) =>{
        try{
            const res = await buscarHorariosGen(values)
            console.log(res.data)
             setHorariosAdmin(res.data)

        }catch(error){
            console.log(error)
        }
     }

     const modifyfindUsernames = async(values)=>{
        try{
           const res = await modificarHorariosGen(values)

        }catch(error){
            console.log(error)
        }
     }


     const clear = () => {
        setHorarios(null)
        getMarkStart(null)
        getMarkEnd(null)
        setErrors([])
     }


 
     

     const postEntry = async () =>{    
        try{
            const res = await markEntry();
            if(res.status === 200){
                getMarkStart(res.data)
                console.log(res.data)
            }else{
                setErrors(res.data)
                console.log(res.data)
            }
            

        }catch(error){
            console.error(error)
        }
    
     }

     const postExit = async () =>{

        try{
            const res = await markExit();
            if(res.status === 200){
                getMarkEnd(res.data)
                console.log(res.data)
            }else{
                setErrors(res.data)
                console.log(res.data)
            }
         

        }catch(error){
            console.error(error)
        }

     }

     useEffect(()=>{
       clear();
    },[user])
   

    return(
        <TaskContext.Provider value={{getschedulesData,horarios,postEntry,markstart,postExit,markEnd,errors,modifyPass,findUsernames,horariosAdmin,modifyfindUsernames}}>
        {children}
        </TaskContext.Provider>
    )
}