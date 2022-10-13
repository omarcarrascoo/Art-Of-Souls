import { createContext, useState } from "react"


export const CountContext = createContext()

export const CountDataProvider = ({children}) =>{
    const [contador, setContador] = useState(1)

    return ( 
        <CountContext.Provider value={{
            contador,
            setContador
        }}>
            {children}
        </CountContext.Provider>
    )
}