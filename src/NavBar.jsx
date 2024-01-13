import aza from './Azalogo.png'
const NavBar = () => {
  return (
    <div>
        <div className="wrapper">
            <div className="l1">
                <img src={aza} height={75} width={75} alt="azamgarh" />
                <h1>AZMAGARH</h1>
            </div>
            <span><h2>जय श्री राम 🚩</h2></span>
            <div className="l2">
                <li>
                    <ul>HOME</ul>
                    <ul>ABOUT</ul>
                    <ul>CONTACT</ul>
                </li>
            </div>
        </div>
    </div>
  )
}

export default NavBar