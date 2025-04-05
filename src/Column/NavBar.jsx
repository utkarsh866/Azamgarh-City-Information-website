import aza from '.asseta/Azalogo.png';
import { useState ,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon,faSun } from '@fortawesome/free-solid-svg-icons';
const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const[theme,setTheme]=useState("light-theme");
  const [icon, setIcon] = useState(faMoon);
const toggleTheme=()=>{
    theme === "dark-theme"?setTheme("light-theme") :setTheme("dark-theme");
    setIcon(theme === "dark-theme" ? faSun : faMoon);
}
useEffect(()=>
{
    document.body.className=theme;
})
  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };
  return (
    <div>
    <div className="wrapper">
      <div className="l1">
        <img src={aza} height={75} width={75} alt="azamgarh" />
        <h1>AZMAGARH</h1>
        <button onClick={toggleTheme}><FontAwesomeIcon icon={icon} /></button>
      </div>
      {/* <span>
        <h2>जय श्री राम 🚩</h2>
      </span> */}
      <div>
    <ul className={`nav-links${isMobile ? '-mobile' : ''}`}>
      <li><a href="/">Home</a></li>
      <li><a href="/Contact">Contact</a></li>
      <li><a href="/">About us</a></li>
      <li>
      <div className="dropdown">
      <button className="dropbtn">Top place
      <i className="fa fa-caret-down"></i></button>
      <div className="dropdown-content">
          <a href="/Topplace" >Top Spritiual Place</a>
           <a href="/Topschool">Top School</a>
            <a href="/Top Market">Top Market</a>
            <a href="/TopCollege">Top College</a>
        </div>
</div></li>
      <li><div className="dropdown">
      <button className="dropbtn">NEWS & WEATHER
      <i className="fa fa-caret-down"></i></button>
      <div className="dropdown-content">
          <a href="/News" >City News</a>
           <a href="/Weather">City Weather</a>
        </div>
</div></li>
    </ul>
      <button className="menu-icon" onClick={toggleMenu}>
        {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
      </div>
    </div>
  </div>
  
  )
}

export default NavBar