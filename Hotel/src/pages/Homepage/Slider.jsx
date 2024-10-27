import React, { useState } from 'react';
import './Slider.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaUmbrellaBeach, FaHotel } from 'react-icons/fa';
import { IoGolfSharp } from 'react-icons/io5';
import { GiSkis } from 'react-icons/gi';
import { MdLocalDining, MdOutlineHouseboat } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { id: 1, name: 'Beach', icon: <FaUmbrellaBeach />, link: '/Home/beachhotel' },  
        { id: 2, name: 'Golf', icon: <IoGolfSharp />, link: '/Home/golf' },
        { id: 3, name: 'Ski', icon: <GiSkis />, link: '/Home/ski' },
        { id: 4, name: 'Dining', icon: <MdLocalDining />, link: '/Home/dining' }, 
        { id: 5, name: 'Retreats', icon: <MdOutlineHouseboat />, link: '/Home/retreats' }, 
        { id: 6, name: 'Hotels & Resorts', icon: <FaHotel />, link: '/Home/hotels_resort' },  
    ];

    const slidesToShow = 3; // Display three slides at a time

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - slidesToShow : prev - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - slidesToShow ? 0 : prev + 1));
    };

    return (
        <div className="new-slider-container">
            {/* Previous Slide Button */}
            <div className="new-slider-nav prev" onClick={prevSlide}>
                <FaChevronLeft />
            </div>

            {/* Slide Icons */}
            <div className="new-slider-content">
                {slides.slice(currentSlide, currentSlide + slidesToShow).map((slide) => (
                    <Link key={slide.id} to={slide.link} className="new-slide">
                        <div className="new-icon-container">
                            {slide.icon}
                        </div>
                        <p className="new-slide-name">{slide.name}</p>
                    </Link>
                ))}
            </div>

            {/* Next Slide Button */}
            <div className="new-slider-nav next" onClick={nextSlide}>
                <FaChevronRight />
            </div>
        </div>
    );
};

export default Slider;
