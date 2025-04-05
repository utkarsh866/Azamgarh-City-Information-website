import children from "./assets/Children css.jpeg"
import childrencollege from "./assets/Children College.jpeg"
import jyoti from "./assets/Jyotiniketan.jpeg"
const Topschool = () => {
  return (
    <>
    <h1 className="h33">Top School Azamgarh</h1>
    <div className="wrapper4">
        <div className="di11">
            <img src={childrencollege}  height={400} width={400} alt="" />
            <h3>Children college, Belaisa Azamgarh</h3>
            <p> Children College also known as Children College. The school was established in 1977. Children College is a Co-Ed school affiliated to Council for Indian School Certificate Examinations (CISCE) . 
                It is managed by All India Children Care & Educational Development Society, Azamgarh.it offers multiple courses such as PCM,PCB,commerce etc.
                <h2>Children college Location</h2>
            <a href="https://maps.app.goo.gl/3MSkTBMcQRxkhnXMA" target="_blank" rel="noopener noreferrer"><button>VIEW ON MAP</button></a>
            </p>
        </div>
        <div className="di22">
            <img src={children}  height={400} width={400} alt="" />
            <h3>Children Senior secondary School</h3>
            <h3>Belaisa,Azamgarh</h3>
            <p>Children Senior Secondary School in Azamgarh is a higher secondary school. Some say it has grown in size, strength, and excellence. 
It offers admissions for boys and girls from grades 1–5, and only girls from grades 6–11. 
The school also has an award-winning e-learning portal that offers online study material for CBSE, ICSE, NCERT, and SSC boards.                                   


<h2>Children sr. sec. school location</h2>
<a href="https://maps.app.goo.gl/MzXsniYt4U13cnMw9" target="_blank" rel="noopener noreferrer"><button>VIEW ON MAP</button></a></p>
        </div>
        <div className="di33">
            <img src={jyoti}  height={400} width={400} alt="" />
            <h3>Jyoti niketan School</h3>
            <p>
            Jyoti Niketan School, Azamgarh, a minority institution, was established in 1971 and is administered by the Roman Catholic Diocese of Varanasi, a registered charitable society. It is under the religious jurisdiction of Bishop of the Diocese of Varanasi. Sisters of Queen of the Apostles are actively involved in its administration.
The school aims at the education of the catholic community around and extends its services to the members of the other communities to the extent possible. 
            <h2>Jyoti niketan school location</h2>
            <a href="https://maps.app.goo.gl/T4maLGe6Sbb3t6sr7" target="_blank" rel="noopener noreferrer"><button>VIEW ON MAP</button></a></p>
        </div>
    </div>
    </>
  )
}
export default Topschool