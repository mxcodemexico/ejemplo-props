import React,{createContext,useState} from 'react'
//Crear el contexto
export const Contexto=createContext();

const GenialProvider=(props)=>{
    const [saludo,generarSaludo]=useState({props})

    return(
        <Contexto.Provider 
        value={{
            saludo
        }}
        >
            {props.children}
        </Contexto.Provider>
    )
}
export default GenialProvider;