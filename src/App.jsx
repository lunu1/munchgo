import './App.css'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import StoreLocator from './components/FindUs.jsx';
import FollowUs from './components/FollowUs';
import IntroSection from './components/About';
import DestinationGrid from './components/Kitchen';
import Footer from './components/Footer.jsx';


function App() {

  return (
    <>

<Router>
<Navbar/>
  <Routes>
    <Route path='/' element={<div><Home/><IntroSection/><StoreLocator/>
  <DestinationGrid/>
  <FollowUs/></div>}/>
    <Route path='/about' element={<IntroSection/>}/>
    <Route path='/findus' element={<StoreLocator/>}/>

  </Routes>
  

  
  <Footer/>
</Router>

    </>
  )
}

export default App
