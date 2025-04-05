import Railway from './assets/RailwayStation.jpg'
const Railwaystation = () => {
  return (
    <>
    <h1 className='h13'>Railway Stations Azamgarh</h1>
    <div className="wrapper3">
            <div className="img1">
            <img src={Railway} height={300} width={500} alt="Railway" />
                <h3>Railway station Azamgarh</h3>
            </div>
        <div className='railwaycss'>
        <p>Azamgarh railway station is located in Azamgarh, Uttar Pradesh, India. It falls under North Eastern Railway zones Varanasi railway division. It is electrified single line and station code is AMH. 
        The station consists of three platforms and the station catering to about 30 trains.
        Few major trains that connect through Azamgarh are Anvt Mau Express, Gorakhpur–Mumbai LTT Godan Express, Ahmedabad–Darbhanga Sabarmati Express, Tapti Ganga Express, Kolkata - Azamgarh express and more.</p>
        <h2>Railways station location-<a href="https://maps.app.goo.gl/asfC9CGJnAQDHKhm9" target="_blank" rel="noopener noreferrer"><button>VIEW ON MAP</button></a></h2>
        </div>
    </div>
    </>
  )
}

export default Railwaystation