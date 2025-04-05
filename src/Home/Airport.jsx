import Airport1 from './assets/Airport.jpg'
const Airport = () => {
  return (
    <>
    <h1 className='h13'> Airport Azamgarh</h1>
    <div className="wrapper31">
       
            <div className="img1">
            <img src={Airport1} height={300} width={500} alt="Railway" />
                <h3> Airport Azamgarh</h3>
            </div>
        <div className='railwaycss'>
        <p>Azamgarh Airport is a Domestic Airport at Manduri Village outside of Azamgarh city, near Kuan Devchand Patti, in the Indian state of Uttar Pradesh.It is being developed by upgrade of the existing government airstrip.
        The existing airstrip can support aircraft weighing up to 5,700 kg (12,600 lb) with a runway of 1,400 by 23 metres (4,593 by 75 ft).</p>
        <h2>Azamgarh Airport location-<a href="https://maps.app.goo.gl/vuv4hpQ1kYp2ySfZ6" target="_blank" rel="noopener noreferrer"><button>VIEW ON MAP</button></a></h2>
        </div>
    </div>
    </>
  )
}

export default Airport