



import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Navbar.css';
import lty_logo from '../../assets/lty_logo.png';
import underline from '../../assets/nav_underline.svg';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();
  const navigate = useNavigate(); // Initialize navigate

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  // Function to navigate to the homepage and scroll to the contact section
  const handleContactClick = () => {
    navigate('/'); // Navigate to the homepage
    setMenu("contact"); // Set active menu
    setTimeout(() => {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); // Scroll to the contact section
    }, 100); // Add a delay to allow navigation to complete
  };

  return (
    <nav className="navbar">
      <img src={lty_logo} alt="Site Logo" className="navbar-logo" />
      <img src={menu_open} onClick={openMenu} alt="Open Menu" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="Close Menu" className="nav-mob-close" />
        <li>
          <Link to="/" className="anchor-link" onClick={() => setMenu("home")}>
            Home
          </Link>
          {menu === "home" && <img src={underline} alt="Underline" />}
        </li>
        <li>
          <Link to="/about" className="anchor-link" onClick={() => setMenu("about")}>
            About Me
          </Link>
          {menu === "about" && <img src={underline} alt="Underline" />}
        </li>
        <li>
          <Link to="/services" className="anchor-link" onClick={() => setMenu("services")}>
            Skills
          </Link>
          {menu === "services" && <img src={underline} alt="Underline" />}
        </li>
        <li>
          <Link to="/mywork" className="anchor-link" onClick={() => setMenu("mywork")}>
            Education
          </Link>
          {menu === "mywork" && <img src={underline} alt="Underline" />}
        </li>
        <li>
          <p onClick={handleContactClick} className="anchor-link">
            Contact
          </p>
          {menu === "contact" && <img src={underline} alt="Underline" />}
        </li>
      </ul>
      <div className="nav-connect">
        <p onClick={handleContactClick} className="anchor-link">Connect With Me</p>
      </div>
    </nav>
  );
};

export default Navbar;
