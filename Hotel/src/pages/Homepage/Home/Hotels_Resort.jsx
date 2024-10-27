import React, { useState } from "react";
import "./PrivateRetreats.css"; // Import your CSS file
import beachHotel from "../../../assets/pexels-asadphoto-1024967.jpg";
import beachHotel2 from "../../../assets/pexels-victor-fevrier-483136981-15878800.jpg";
import beachHotel3 from "../../../assets/pexels-cokfotokandulu-28916774.jpg";
import beachHotel4 from "../../../assets/pexels-elena-zhuravleva-647531-1457812.jpg";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

const Hotel_Resort = () => {
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
        <h1>ALL HOTELS & RESORT</h1>
        <h2>133 HOTELS AND RESORTS</h2>
      </header>

      {visible && (
        <div className="featured-properties">
          <h3>Featured properties</h3>
          <div className="gallery">
            <div className="property">
              <img src={beachHotel} alt="Punta Mita (Naviva)" />
              <h4>
                Hawaii, Maui
                <a href="#" className="learn-more">
                  <FaArrowRight />
                </a>
              </h4>
              <p>
                Discover the spirit of Aloha and celebrate the wonders of Maui
                in our luxury open-air beachfront Resort.
              </p>
            </div>
            <div className="property">
              <img src={beachHotel2} alt="Fort Lauderdale" />
              <h4>
                Punta Mita, México
                <a href="#" className="learn-more">
                  <FaArrowRight />
                </a>
              </h4>
              <p>
                Celebrate the rich culture of Mexico one sunset at a time, in
                our stunning Pacific beachfront Resort.
              </p>
            </div>
            <div className="property">
              <img src={beachHotel3} alt="Cabo San Lucas at Cabo del Sol" />
              <h4>
                Tamarindo, México
                <a href="#" className="learn-more">
                  <FaArrowRight />
                </a>
              </h4>
              <p>
                Escape to a secluded nature reserve in Mexico’s Tamarindo, the
                pristine coastline where verdant jungle meets the ocean.
              </p>
            </div>
            <div className="property">
              <img src={beachHotel4} alt="Mallorca" />
              <h4>
                Hong Kong
                <a href="#" className="learn-more">
                  <FaArrowRight />
                </a>
              </h4>
              <p>
                With seven Michelin stars and a Zen-inspiring Spa, our landmark
                home is a culinary and wellness destination.
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
            <li>Austin</li>
            <li>Bahamas (The Ocean Club)</li>
            <li>Baltimore</li>
            <li>Boston</li>
            <li>One Dalton Street, Boston</li>
            <li>Bogotá</li>
            <li>Bogotá (Casa Medina)</li>
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
            <li>Beverly Wilshire, A Four Seasons Hotel</li>
            <li>Los Angeles Area (Westlake Village)</li>
            <li>Los Cabos at Costa Palmas™</li>
            <li>Mexico City</li>
            <li>Miami</li>
            <li>Miami Beaches, Surfside</li>
            <li>Minneapolis</li>
            <li>Montreal</li>
            <li>Napa Valley</li>
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
            <li>Bali at Sayan</li>
            <li>Bangkok at Chao Phraya River</li>
            <li>Beijing</li>
            <li>Bengaluru at Embassy ONE</li>
            <li>Bora Bora</li>
            <li>Chiang Mai</li>
            <li>Dalian</li>
            <li>Golden Triangle, Thailand</li>
            <li>Guangzhou</li>
            <li>Hangzhou at Hangzhou Centre</li>
            <li>Hangzhou at West Lake</li>
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

export default Hotel_Resort;
