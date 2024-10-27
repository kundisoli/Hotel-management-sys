import React, { useState } from "react";
import { IoMdSearch, IoIosArrowDown } from "react-icons/io";
import "./PR2.css";
import image1 from "../../assets/pexels-arabiclogos-453201.jpg";
import image3 from "../../assets/pexels-wildlittlethingsphoto-745045.jpg";
import image2 from "../../assets/pexels-elevate-1267697.jpg";
import videoFile from "../../assets/7578544-uhd_3840_2160_30fps.mp4"; // Import your video file here

const PR = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCountries, setVisibleCountries] = useState({
    northAmerica: false,
    europe: false,
    centralSouthAmerica: false,
    asiaPacific: false,
  });

  const slides = [
    {
      image: image1,
      description: "Savour time with family and friends in expansive homes...",
    },
    {
      image: image2,
      description:
        "Unwind in the privacy of your own villa or residence...",
    },
    {
      image: image3,
      description:
        "Let our private chefs and dedicated residential teams...",
    },
  ];

  const toggleCountryVisibility = (region) => {
    setVisibleCountries({
      ...visibleCountries,
      [region]: !visibleCountries[region],
    });
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="section-pr">
      <div className="intro">
        <h4>Private Retreats</h4>
        <h1>STARLIGHT SANCTUARY PRIVATE RETREATS</h1>

        <div className="search-bar">
          <input type="text" placeholder="Search.." className="search-input" />
          <IoMdSearch />
        </div>
        <div className="section-links">
          <a href="#" className="section-link">GLOBAL PORTFOLIO</a>
          <a href="#" className="section-link">PRIVATE RESIDENCES</a>
          <a href="#" className="section-link">SUBSCRIBE</a>
        </div>
      </div>

      {/* Video Section */}
      <div className="video-container1">
        <video width="100%" height="auto" controls>
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="abt">
        <h3>YOUR HOME, THE CENTRE OF OUR WORLD</h3>
        <p>
          It’s the little things that make a house a home. The thoughtful
          touches, caring gestures, world-class amenities, and expertise you
          can count on...
        </p>
        <button>VIEW PORTFOLIO MAP</button>
      </div>

      {/* Another Video Section */}
      <div className="video-container">
        <video width="75%" height="auto" controls>
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <h1>WHY STAY WITH US</h1>
      <div className="stay">
        <div className="column">
          <img src={image1} alt="Description 1" />
          <p>
            Savour time with family and friends in expansive homes with
            gourmet kitchens, indoor-outdoor living spaces...
          </p>
        </div>
        <div className="column">
          <img src={image2} alt="Description 2" />
          <p>
            Unwind in the privacy of your own villa or residence...
          </p>
        </div>
        <div className="column">
          <img src={image3} alt="Description 3" />
          <p>
            Let our private chefs and dedicated residential teams tailor
            your stay...
          </p>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="testimonial-container">
        <div className="testimonial-quote">
          <p className="quote-text">
            “This is one of the best decisions we have ever made...”
          </p>
          <p className="quote-author">
            <span>JANET</span> PRIVATE RESIDENCE OWNER
          </p>
        </div>
      </div>
      
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

      {/* Carousel Section */}
      <div className="carousel-container">
        <div className="carousel">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === currentSlide ? "active" : ""}`}
              data-description={slide.description}
            >
              <img src={slide.image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="description-container">
          <p id="image-description">{slides[currentSlide].description}</p>
        </div>

        <button className="carousel-control prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="carousel-control next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

     
    </div>
  );
};

export default PR;
