import './App.css'
import Topplace from './Top/Topplace';
import Topschool from './Topschool';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Column/Contact';
import NavBar from './Column/NavBar';
import Footer from './Column/Footer';
import NewsItem from './components/NewsItem';
import TopCollege from './Top/TopCollege';
import Weather from './components/Weather';
const App = () => {
  return (
    <div >
      <NavBar/>
      <BrowserRouter>
       <Routes>
       <Route exact path='/' element={<Home/>}></Route>
       <Route exact path='/Contact' element={<Contact/>}></Route>
       <Route exact path='/Topplace' element={<Topplace/>}></Route>
       <Route exact path='/Topschool' element={<Topschool/>}></Route>
       <Route exact path='/News' element={<NewsItem/>}></Route>
       <Route exact path='/TopCollege' element={<TopCollege/>}></Route>
       <Route exact path='/Weather' element={<Weather/>}></Route> 
       </Routes>
      </BrowserRouter>
     <Footer/> 
    </div>
  );
};

export default App;
