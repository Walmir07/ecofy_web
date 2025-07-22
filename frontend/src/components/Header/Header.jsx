import React from 'react';
import "./Header.css";
import logoEcofy from "../../assets/logo/logo-ecofy.png";

const Header = () => {
  return (
    <div className='header'>
        <img className='logo' src={logoEcofy} alt="Logo do Ecofy"></img>
        <h1 className='titulo'>Eco<strong>fy</strong></h1>
    </div>
  )
}

export default Header