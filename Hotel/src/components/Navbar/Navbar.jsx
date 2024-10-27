import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png'; // Replace with your logo path
import { FaBars, FaTimes, FaCheckCircle } from 'react-icons/fa'; // Import icons for hamburger and current page indication

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation(); // React Router hook to get the current route

  // Toggle mobile menu open/close
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close the mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="menu">
      <header className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <img src={logo} alt="Logo" />
          </div>

          <nav className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
            <ul>
              <li>
                <Link to="/" onClick={closeMobileMenu}>
                  Hotels & Resorts {location.pathname === '/' && <FaCheckCircle className="current-page-icon" />}
                </Link>
              </li>
              <li>
                <Link to="/private_retreats" onClick={closeMobileMenu}>
                  Private Retreats {location.pathname === '/retreats' && <FaCheckCircle className="current-page-icon" />}
                </Link>
              </li>
              <li>
                <Link to="/res" onClick={closeMobileMenu}>
                  Residences {location.pathname === '/residences' && <FaCheckCircle className="current-page-icon" />}
                </Link>
              </li>
              <li>
                <Link to="/dining" onClick={closeMobileMenu}>
                  Dining {location.pathname === '/dining' && <FaCheckCircle className="current-page-icon" />}
                </Link>
              </li>
              <li>
                <Link to="/private-jet" onClick={closeMobileMenu}>
                  Private Jet {location.pathname === '/private-jet' && <FaCheckCircle className="current-page-icon" />}
                </Link>
              </li>
              <li>
                <Link to="/yachts" onClick={closeMobileMenu}>
                  Yachts {location.pathname === '/yachts' && <FaCheckCircle className="current-page-icon" />}
                </Link>
              </li>
            </ul>
          </nav>

         

          <div className="hamburger" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <FaTimes size={30} color="white" /> : <FaBars size={30} color="white" />}
          </div>
          
        </div>
      </header>
    </div>
  );
};

export default Navbar;
