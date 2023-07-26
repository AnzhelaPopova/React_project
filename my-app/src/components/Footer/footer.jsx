import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/images/13.png';
import './Footer.css';


function Footer() {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div><p>&copy; {currentYear} Cards</p></div>
      <Link to="/"><img src={logo} className= "logo" alt="logo" /></Link>
    </footer>
  );
}

export default Footer;
