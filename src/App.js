import './App.css';
import Home from './components/pages/Home';
import Destinations from './components/pages/Destinations';
import Aboutus from './components/Aboutus'; 
import Contactus from './components/Contactus';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route  path='/' element={ <Home/>} />
        <Route  path='/destination' element={<Destinations/>} />
        <Route  path='/AboutUs' element={<Aboutus/>} />
        <Route  path='/ContactUs' element={<Contactus/>} />
      </Routes>      
    </>
  );
}

export default App;
