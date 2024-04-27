import './App.css'
import Topplace from './Topplace';
import Topschool from './Topschool';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import NavBar from './NavBar';
import Footer from './Footer';
import NewsItem from './components/NewsItem';
import TopCollege from './TopCollege';
import Weather from './Weather App/weather';
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
