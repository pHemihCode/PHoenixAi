import { ReactNode, createContext, useContext, useEffect, useState } from "react"
import axios from 'axios'
interface User {
   name: string,
   email: string,
}

interface UserAuth {
    isLoggedIn: boolean,
    user: User | null,
    login: (email:string, password:string) => Promise<void>,
    signup: (name:string, email:string, password:string) => Promise<void>,
    logout:()=>Promise<void>
}

const AuthContext = createContext<UserAuth | null>(null)

export const AuthProvider = ({ children } : {children: ReactNode}) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(()=>{
        //This will fetch if user cookies is verified and valid
        async function checkAuth() {
            const res = await axios.get("/user/auth-status");
            if(res.status !== 200){
                throw new Error("Wrong credentials")
            }
            const data = await res.data;
            if(data){
                setUser({email:data.email, name:data.name })
            }
        }
        checkAuth()
    }, [])

    const login = async (email:string, password:string)=> {
       const res = await axios.post('/user/login',{ email, password});
       if(res.status !== 200){
        throw new Error("Wrong credentials")
       }
       const data = await res.data;
       if(data){
        setUser({email:data.email, name:data.name})
        setIsLoggedIn(true)
       }
       console.log(data)
    }

    const signup = async (name:string, email:string, password:string) =>{

    }
    
    const logout = async () => {

    }
    const value = {user, isLoggedIn, login, signup, logout};
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);