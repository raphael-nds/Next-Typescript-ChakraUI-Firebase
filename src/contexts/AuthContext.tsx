import { createContext, useContext, useEffect, useState } from "react";
import  { auth } from "../services/firebase";

const authContext = createContext({})

export const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        auth.onAuthStateChanged((user) =>{
            setCurrentUser(user)
            setLoading(false)
        });
    }, [])

    if (loading){
        return <>Carregando...</>
    }
    return (
    <authContext.Provider value={{ currentUser }}>
        {children}
    </authContext.Provider>
    )
}

export function useAuth() {
   const context = useContext(authContext)

   return context
}