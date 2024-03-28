import Azamgarhvideo from './assets/Azamgarh.mp4'
const About = () => {
  return (
    <>
    <h1 className="h13">About Azamgarh</h1>
    <div className="wrapper2">
        <div className="about">
        <p>Azamgarh is a city in the Indian state of Uttar Pradesh. It is the headquarters of Azamgarh division, which consists of Ballia, Mau and Azamgarh districts. 
            Azamgarh is situated on the bank of Tamsa River (Tons). It is located 268 km (167 mi) east of the state capital Lucknow and 809 km from national capital, Delhi.
            Azamgarh, one of the easternmost districts(a district in Purvanchal sub-region) of Uttar Pradesh, once formed a part of the ancient Kosala kingdom, except its north-eastern part.</p>
            <video autoPlay muted loop>
           <source src={Azamgarhvideo} type="video/mp4"/>
           Your browser does not support the video tag.
           </video>

        </div>
    </div>
    </>
  )
}

export default About