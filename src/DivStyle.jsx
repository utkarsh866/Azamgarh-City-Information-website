import "./App.css"
import {useState} from "react";
const DivStyle= () => {
    // State to track the active style
    const [activeStyle, setActiveStyle] = useState('divStyle1');
  
    // Function to handle the click event and toggle the active style
    const handleClick = () => {
        if (activeStyle==="divStyle1"){
            setActiveStyle("divStyle2")
        }
        else{
            setActiveStyle("divStyle1")
        }
    };
  
    return (
      <div>
        <div className={activeStyle} onClick={handleClick}>
          Click me to switch styles
        </div>
      </div>
    );
  };
  
  export default DivStyle;