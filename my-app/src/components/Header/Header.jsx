import React from 'react';
import './Header.css'; 
import { Link } from "react-router-dom";
import logo from '../../assets/images/13.png';


export default function Header(){

  return (
    <header className = "cardHeader">
      <div>
      <nav>
        <ul>
        <Link to="/"><img src={logo} className= "logo" alt="logo" /></Link>
        <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/card">Карточки</Link>
            </li>
            <li>
              <Link to="/words">Слова</Link>
            </li>
        </ul>
      </nav>
      </div>
    
    </header>
  );
}
