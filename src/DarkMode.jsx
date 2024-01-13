import './App.css'
import { useEffect, useState } from "react";
const DarkMode = () => {
const[theme,setTheme]=useState("light-theme");
const toggleTheme=()=>{
    theme === "dark-theme"?setTheme("light-theme") :setTheme("dark-theme");
}
useEffect(()=>
{
    document.body.className=theme;
})
  return (
    <div>
      <button onClick={toggleTheme}>TOGGLE</button>
    </div>
  )
}

export default DarkMode