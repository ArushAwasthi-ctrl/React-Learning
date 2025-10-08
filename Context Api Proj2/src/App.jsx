import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Card from './components/Card/Card'
import ThemeBtn from './components/Theme/ThemeBtn'
import "./App.css";

function App() {
    const [thememode , setThemeMode] = useState("light")

    const lightTheme = ()=>{
      setThemeMode("light")

    }
      const darkTheme = ()=>{
        setThemeMode("dark")
      }

     useEffect(()=>{
        const topElement = document.querySelector('html')
       topElement.classList.remove("light", "dark")
        if(thememode === "light")
        {
          topElement.classList.add("light")
        }
        else{
             topElement.classList.add("dark")
        }
     } , [thememode])


  return (
    <ThemeProvider value={{thememode , lightTheme , darkTheme}}> 

    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">

          <ThemeBtn />
        </div>
        

        <div className="w-full max-w-sm mx-auto">

          <Card />
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
