import React, { useState } from "react";
import "./Navbar.css";
import logo from './logo.png';
import { motion } from "motion/react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <nav>
      <div className="navbar-container">
        <motion.div className="logo"  transition={{ duration: 0.5 }}  whileHover={{ scale: 1.2 }}>
         <img href="#home" src={logo} alt="" />
        </motion.div>
        <div className={`nav-links ${sidebarActive ? "show" : ""}`}>
          <a href="#home"><Link to="/">Home</Link></a>
          <a href="#about"><Link to="/About">About</Link></a>
          <a href="#services"><Link to="/Services">Services</Link></a>
          <a href="#pricing"><Link to="/Pricing">Pricing</Link></a>
          <a href="#developers"><Link to="/Developers">Developers</Link></a>
          <a href="#contact">Contact</a>
        </div>
        <div className="hamburger" onClick={toggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {sidebarActive && <div className="overlay" onClick={toggleSidebar}></div>}
      </div>
    </nav>
  );
};

export default Navbar;
