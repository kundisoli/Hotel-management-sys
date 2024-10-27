import React from 'react';
import './PrivateRetreats.css'; // Make sure this CSS file exists and has the correct styles.
import beachHotel1 from '../../../assets/beach-2100369_1280.jpg'; // Check if the image exists at this path.
import beachHotel2 from '../../../assets/pexels-cokfotokandulu-28916774.jpg'; 
import beachHotel3 from '../../../assets/pexels-elena-zhuravleva-647531-1457812.jpg'; 
import beachHotel4 from '../../../assets/pexels-victor-fevrier-483136981-15878800.jpg'; 



const BeachHotels = () => {
  return (
    <div>
      
    <div className="private-retreats">
      <header className="retreats-header">
        <h1>BEACH</h1>
        <h2>49 HOTELS AND RESORTS</h2>
      </header>
      
      <div className="featured-properties">
        <h3>Featured properties</h3>
        <div className="gallery">
          {/* First Property */}
          <div className="property">
            <img src={beachHotel1} alt="Punta Mita (Naviva)" />
            <h4>PUNTA MITA (NAVIVA®)</h4>
            <p>
              This innovative tented experience is set on Mexico’s stunning Pacific coast.
            </p>
            <a href="/punta-mita-naviva" className="learn-more">→</a> {/* Use proper internal links */}
          </div>
          
          {/* Second Property */}
          <div className="property">
            <img src={beachHotel2} alt="Fort Lauderdale" />
            <h4>FORT LAUDERDALE</h4>
            <p>
              Embrace the classic yacht club lifestyle at our prime beachfront Hotel on the South Florida Riviera.
            </p>
            <a href="/fort-lauderdale" className="learn-more">→</a> {/* Update the link */}
          </div>
          
          {/* Third Property */}
          <div className="property">
            <img src={beachHotel3} alt="Cabo San Lucas at Cabo del Sol" />
            <h4> CABO SAN LUCAS AT CABO DEL SOL</h4>
            <p>
              At the tip of Mexico’s Baja peninsula, experience Cabo’s Golden Corridor with Mexican chic and a cool Mediterranean vibe.
            </p>
            <a href="/cabo-san-lucas" className="learn-more">→</a> {/* Update the link */}
          </div>

          {/* Fourth Property */}
          <div className="property">
            <img src={beachHotel4} alt="Mallorca" />
            <h4>MALLORCA</h4>
            <p>
              Reborn with glamorous chic, this legendary beach retreat hides within a vast private playground.
            </p>
            <a href="/mallorca" className="learn-more">→</a> {/* Update the link */}
          </div>
        </div>
      </div>
    
    </div>
    </div>
  );
};

export default BeachHotels;
