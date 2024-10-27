import React, { useState } from 'react';
import './Sliders.css';
import beachHotel from "../../assets/pexels-asadphoto-1024967.jpg";
import beachHotel2 from "../../assets/pexels-victor-fevrier-483136981-15878800.jpg";
import beachHotel3 from "../../assets/pexels-cokfotokandulu-28916774.jpg";
import beachHotel4 from "../../assets/pexels-elena-zhuravleva-647531-1457812.jpg";
import Slider from './Slider';
import { Outlet } from 'react-router-dom';


const slides = [
  {
    id: 1,
    title: 'United Kingdom',
    image: beachHotel,
    description: 'London at Park Lane | London at Tower Bridge | Hampshire',
  },
  {
    id: 2,
    title: 'Hawaii',
    image: beachHotel2,
    description: 'Hualalai | Maui at Wailea | Lanai | O’ahu at Ko Olina | Sensai Lanai',
  },
  {
    id: 3,
    title: 'Mountain Resorts',
    image: beachHotel3,
    description: 'Jackson Hole | Santa Fe | Vail | Whistler',
  },
  {
    id: 4,
    title: 'Caribbean',
    image: beachHotel4,
    description: 'Anguilla | Nevis | The Ocean Club, Bahamas',
  },
];

const Homepage = () => {
 
  const [selectedSlide, setSelectedSlide] = useState(slides[0]);

  const handleSlideClick = (slide) => {
    setSelectedSlide(slide);
  };

  return (
  

    
    <div className="slider-container">    
     
      <div className="selected-slide-content">
        <img src={selectedSlide.image} alt={selectedSlide.title} className="selected-slide-image" />
        <div className="selected-slide-details">
          <h2>{selectedSlide.title}</h2>
          <p>{selectedSlide.description}</p>
          <button className="view-button">View {selectedSlide.title}</button>
        </div>
      </div>

      <div className="carousel-navigation">
        <button
          className="prev-button"
          onClick={() =>
            setSelectedSlide(
              slides[(slides.indexOf(selectedSlide) - 1 + slides.length) % slides.length]
            )
          }
        >
          &lt;
        </button>
        <button
          className="next-button"
          onClick={() =>
            setSelectedSlide(
              slides[(slides.indexOf(selectedSlide) + 1) % slides.length]
            )
          }
        >
          &gt;
        </button>
      </div>

      <div className="slides">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`slide ${selectedSlide.id === slide.id ? 'active' : ''}`}
            onClick={() => handleSlideClick(slide)}
          >
            <img src={slide.image} alt={slide.title} className="slide-image" />
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </div>
        ))}
      </div>
    </div>
 
  );
};

export default Homepage;
