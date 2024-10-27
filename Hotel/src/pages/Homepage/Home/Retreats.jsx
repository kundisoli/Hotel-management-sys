import React, { useState } from "react";
import "./PrivateRetreats.css"; // Import your CSS file
import beachHotel from "../../../assets/pexels-victor-fevrier-483136981-15878800.jpg";
import beachHotel2 from "../../../assets/sailboats-5122037_1280.jpg";
import beachHotel3 from "../../../assets/san-francisco-4271367_1280.jpg";
import beachHotel4 from "../../../assets/beach-2100369_1280.jpg";

import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
const Retreats = () => {
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
        <h1>RETREATS</h1>
        <h2>49 HOTELS AND RESORTS</h2>
       
      </header>

      {visible && (
        <div className="featured-properties">
          <h3>Featured properties</h3>
          <div className="gallery">
            <div className="property">
              <img src={beachHotel} alt="Punta Mita (Naviva)" />
              <h4>
                PUNTA MITA (NAVIVA)
                <a href="#" className="learn-more">
                <FaArrowRight />
                </a>
              </h4>
              <p>
                This innovative tented experience is set on Mexico’s stunning
                Pacific coast.
              </p>
            </div>
            <div className="property">
              <img src={beachHotel2} alt="Fort Lauderdale" />
              <h4>
                FORT LAUDERDALE
                <a href="#" className="learn-more">
                <FaArrowRight />
                </a>
              </h4>
              <p>
                Embrace the classic yacht club lifestyle at our prime beachfront
                Hotel on the South Florida Riviera.
              </p>
            </div>
            <div className="property">
              <img src={beachHotel3} alt="Cabo San Lucas at Cabo del Sol" />
              <h4>
                CABO SAN LUCAS AT CABO DEL SOL
                <a href="#" className="learn-more">
                <FaArrowRight />
                </a>
              </h4>
              <p>
                At the tip of Mexico’s Baja peninsula, experience Cabo’s Golden
                Corridor with Mexican chic and a cool Mediterranean vibe.
              </p>
            </div>
            <div className="property">
              <img src={beachHotel4} alt="Mallorca" />
              <h4>
                MALLORCA
                <a href="#" className="learn-more">
                <FaArrowRight />
                </a>
              </h4>
              <p>
                Reborn with glamorous chic, this legendary beach retreat hides
                within a vast private playground.
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
            <li>French Riviera</li>
            <li>London at Tower Bridge</li>
            <li>Cabo San Lucas at Cabo Del Sol</li>
            <li>Fort Lauderdale</li>
            <li>Hawaii, Hualalai</li>
            <li>Hawaii, Lanai</li>
            <li>Hawaii, Maui</li>
            <li>Miami Beaches, Surfside</li>
            <li>Punta Mita, Mexico</li>
            <li>Punta Mita (Naviva®)</li>
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
          </ul>
        </div>
      )}
      <hr />

      {/* Middle East & Africa Section */}
      <header className="country-header">
        <h3>Middle East & Africa</h3>
        <button
          onClick={() => toggleCountryVisibility("middleEastAfrica")}
          style={{ float: "right", margin: "1vh" }}
        >
          {visibleCountries.middleEastAfrica ? "Hide" : <IoIosArrowDown />}
        </button>
      </header>
      {visibleCountries.middleEastAfrica && (
        <div className="country-section">
          <ul className="locations-list">
            <li>Doha (The Pearl-Qatar)</li>
            <li>Seychelles</li>
            <li>Seychelles at Desroches Island</li>
            <li>Sharm El Sheikh</li>
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
            <li>Hangzhou at West Lake</li>
            <li>Hoi An, Vietnam (The Nam Hai)</li>
            <li>Koh Samui</li>
            <li>Kuala Lumpur</li>
            <li>Kyoto</li>
          </ul>
        </div>
      )}
     

      {/* Show hidden country count if any */}
      {hiddenCountryCount > 0 && (
        <div className="hidden-count">
          <p>{hiddenCountryCount} country sections are hidden out of {totalCountries}</p>
        </div>
      )}
        
    </div>
  );
};

export default Retreats;
