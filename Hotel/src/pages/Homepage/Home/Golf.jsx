import React, { useState } from "react";
import "./PrivateRetreats.css"; // Import your CSS file
import beachHotel from "../../../assets/pexels-10-star-321296-914682.jpg";
import beachHotel2 from "../../../assets/pexels-betchtyblades-2480612.jpg";
import beachHotel3 from "../../../assets/pexels-jopwell-1325659.jpg";
import beachHotel4 from "../../../assets/pexels-jopwell-1325682.jpg";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

const Golf = () => {
  const [visible, setVisible] = useState(true);
  const [visibleCountries, setVisibleCountries] = useState({
    northAmerica: true,
    europe: true,
    centralSouthAmerica: true,
    middleEastAfrica: true,
    asiaPacific: true,
  });

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const toggleCountryVisibility = (country) => {
    setVisibleCountries((prevState) => ({
      ...prevState,
      [country]: !prevState[country],
    }));
  };

  // Count hidden countries
  const hiddenCountryCount = Object.values(visibleCountries).filter(
    (visible) => !visible
  ).length;

  // Total countries based on the current sections
  const totalCountries = Object.keys(visibleCountries).length;

  return (
    <div className="private-retreats">
      <header className="retreats-header">
        <h1>GOLF</h1>
        <h2>28 HOTELS AND RESORTS</h2>
      </header>

      {visible && (
        <div className="featured-properties">
          <h3>Featured properties</h3>
          <div className="gallery">
            <div className="property">
              <img src={beachHotel} alt="Punta Mita (Naviva)" />
              <h4>
              Vail
                <a href="#" className="learn-more">
                  <FaArrowRight />
                </a>
              </h4>
              <p>
              Come alive with adventure in this history-rich village in the heart of the majestic Colorado Rockies.
              </p>
            </div>
            <div className="property">
              <img src={beachHotel2} alt="Fort Lauderdale" />
              <h4>Megève
                <a href="#" className="learn-more">
                  <FaArrowRight />
                </a>
              </h4>
              <p>
              Distinct French character and Alpine tradition combine all year round at this luxurious modern chalet.
              </p>
            </div>
            <div className="property">
              <img src={beachHotel3} alt="Cabo San Lucas at Cabo del Sol" />
              <h4>
              Mauritius Tamarindo, México
                <a href="#" className="learn-more">
                  <FaArrowRight />
                </a>
              </h4>
              <p>
              From water sports to world-class golf, our secluded Indian Ocean oasis is teeming with opportunities.
              </p>
            </div>
            <div className="property">
              <img src={beachHotel4} alt="Mallorca" />
              <h4>
              Hawaii, Maui

                <a href="#" className="learn-more">
                  <FaArrowRight />
                </a>
              </h4>
              <p>
              Discover the spirit of Aloha and celebrate the wonders of Maui in our luxury open-air beachfront Resort.
              </p>
            </div>
          </div>
        </div>
      )}
      <hr />

      {/* North America Section */}
      <header className="country-header">
        <h3>North America</h3>
        <button
          onClick={() => toggleCountryVisibility("northAmerica")}
          style={{ float: "right", margin: "1vh" }}
        >
          {visibleCountries.northAmerica ? "Hide" : <IoIosArrowDown />}
        </button>
      </header>
      {visibleCountries.northAmerica && (
        <div className="country-section">
          <ul className="locations-list">
            <li>Anguilla</li>
            <li>Atlanta</li>
            
            <li>Buenos Aires</li>
            <li>Houston</li>
            <li>Jackson Hole</li>
            <li>Los Cabos at Costa Palmas</li>
            <li>Napa Valley</li>
            <li>Nevis</li>
          </ul>
        </div>
      )}
      <hr />

      {/* Europe Section */}
      <header className="country-header">
        <h3>Europe</h3>
        <button
          onClick={() => toggleCountryVisibility("europe")}
          style={{ float: "right", margin: "1vh" }}
        >
          {visibleCountries.europe ? "Hide" : <IoIosArrowDown />}
        </button>
      </header>
      {visibleCountries.europe && (
        <div className="country-section">
          <ul className="locations-list">
            <li>French Riviera</li>
            <li>London at Tower Bridge</li>
          </ul>
        </div>
      )}
      <hr />

      {/* Central & South America Section */}
      <header className="country-header">
        <h3>Central & South America</h3>
        <button
          onClick={() => toggleCountryVisibility("centralSouthAmerica")}
          style={{ float: "right", margin: "1vh" }}
        >
          {visibleCountries.centralSouthAmerica ? "Hide" : <IoIosArrowDown />}
        </button>
      </header>
      {visibleCountries.centralSouthAmerica && (
        <div className="country-section">
          <ul className="locations-list">
            <li>Costa Rica</li>
            <li>Jackson Hole</li>
            <li>Las Vegas</li>
            <li>Los Angeles (Four Seasons Los Angeles)</li>
           
            <li>Napa Valley</li>
          </ul>
        </div>
      )}
      <hr />

    

      {/* Asia & Pacific Section */}
      <header className="country-header">
        <h3>Asia & Pacific</h3>
        <button
          onClick={() => toggleCountryVisibility("asiaPacific")}
          style={{ float: "right", margin: "1vh" }}
        >
          {visibleCountries.asiaPacific ? "Hide" : <IoIosArrowDown />}
        </button>
      </header>
      {visibleCountries.asiaPacific && (
        <div className="country-section">
          <ul className="locations-list">
            <li>Bali at Jimbaran Bay</li>
         
            <li>Bengaluru at Embassy ONE</li>
          
            <li>Hoi An, Vietnam (The Nam Hai)</li>
            <li>Hong Kong</li>
          </ul>
        </div>
      )}

      {/* Show hidden country count if any */}
      {hiddenCountryCount > 0 && (
        <div className="hidden-count">
          <p>
            {hiddenCountryCount} country sections are hidden out of{" "}
            {totalCountries}
          </p>
        </div>
      )}
       
    </div>
  );
};

export default Golf;
