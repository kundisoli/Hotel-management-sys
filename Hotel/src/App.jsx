import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Slider from './pages/Homepage/Slider'; // Import the Slider
import './App.css';

import Homepage from './pages/Homepage/Homepage';
import BeachHotel from './pages/Homepage/Home/BeachHotel'; // Import BeachHotel component
import Golf from './pages/Homepage/Home/Golf'; // Import Golf component
import Ski from './pages/Homepage/Home/Ski'; // Import Ski component
import Dining from './pages/Homepage/Home/Dining'; // Import Dining component
import Retreats from './pages/Homepage/Home/Retreats'; // Import Retreats component
import HotelsResort from './pages/Homepage/Home/Hotels_Resort'; // Import HotelsResort component
import Private_Retreats from './pages/PR/Private_Retreats'; // Import Private_Retreats component

import PR from './pages/P_Residences/PR';
const AppLayout = ({ children }) => {
  const location = useLocation();

  // Conditionally render Slider and Homepage if not on /private_retreats route
  const isPrivateRetreats = location.pathname === '/private_retreats';
  const isHomepage = location.pathname === '/'; // Check if the route is the homepage

  return (
    <>
      <Navbar />  {/* Navbar at the top */}
      {!isPrivateRetreats && <Slider />}  {/* Mini Navbar (Slider), not rendered on /private_retreats */}
      
      <div className="main-content">
        {children}
      </div>
      
      {/* Conditionally render Footer (Homepage) only when not on /private_retreats and not on the root homepage */}
      {!isPrivateRetreats && !isHomepage && <Homepage />}  
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Homepage />} />  {/* Homepage route */}
          <Route path="/Home/beachhotel" element={<BeachHotel />} />
          <Route path="/Home/golf" element={<Golf />} />
          <Route path="/Home/ski" element={<Ski />} />
          <Route path="/Home/dining" element={<Dining />} />
          <Route path="/Home/retreats" element={<Retreats />} />
          <Route path="/Home/hotels_resort" element={<HotelsResort />} />
          <Route path="/private_retreats" element={<Private_Retreats />} />
        </Routes>
      </AppLayout>
    </Router>
//<PR/>
  );
};

export default App;
