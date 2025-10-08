import React , {createContext, useContext} from "react";


export const ThemeContext = createContext({
    thememode:"light",
    lightTheme : ()=>{},
    darkTheme : ()=>{}
})

export const ThemeProvider = ThemeContext.Provider


export default function useTheme(){

    return useContext(ThemeContext)
}


