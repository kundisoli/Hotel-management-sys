import React from "react";
import { IoMdSearch } from "react-icons/io";
import "./PR.css"; // Ensure the CSS file exists and is correctly linked
import image1 from '../../assets/pexels-arabiclogos-453201.jpg'
import image3 from '../../assets/pexels-wildlittlethingsphoto-745045.jpg'
import image2 from '../../assets/pexels-elevate-1267697.jpg'
import videoFile from '../../assets/7578544-uhd_3840_2160_30fps.mp4'; // Example: import your video file here

const Private_Retreats = () => {
    return (
        <div className="section-pr">
        <div className="intro">
            <h4>Private Retreats</h4>
            <h1>STARLIGHT SANCTUARY PRIVATE RETREATS</h1>
            
            <div className="search-bar">
                <input type="text" placeholder="Search.." className="search-input" />
                <IoMdSearch />
            </div>
            <a href="#" className="section-link">DISCOVER OUR COLLECTION OF VILLAS AND RESIDENCE</a>
        </div>
        
        {/* Video Section */}
        <div className="video-container1">
            <video width="100%" height="auto" controls>
                <source src={videoFile} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
        
        <div className="abt">
            <h3>COME FOR THE HOME, STAY FOR THE HEART</h3>
            <p>
            Experience a stay in the villas and residences of Four Seasons Private Retreats. Come for the space, the private pools, and the comforts of home – 
            stay for the moments we bring to life with our legendary service. With over 800 villas and residences in 30 of the most desirable destinations, we’ll ensure to set the stage for an extraordinary getaway.</p>
        </div>
        
        {/* Another Video Section */}
        <div className="video-container">
            <video width="75%" height="auto" controls>
                <source src={videoFile} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
        <h1> WHY STAY WITH US</h1>
        <div className="stay">
            <div className="column">
                <img src={image1} alt="Description 1" />
                <p>Savour time with family and friends in expansive homes with gourmet kitchens, indoor-outdoor living spaces and private pools all masterfully designed with plenty of space to entertain.</p>
            </div>
            <div className="column">
                <img src={image2} alt="Description 2" />
                <p>Unwind in the privacy of your own villa or residence, complete with personalized care and the world class amenities of Four Seasons.</p>
            </div>
            <div className="column">
                <img src={image3} alt="Description 3" />
                <p>​Let our private chefs and dedicated residential teams tailor your stay to ensure your time together remains exclusively yours.</p>
            </div>
        </div>
        </div>
    );
};

export default Private_Retreats;
