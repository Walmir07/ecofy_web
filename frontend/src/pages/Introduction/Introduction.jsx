import React from 'react';
import "./Introduction.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header.jsx"

const Introduction = () => {
  return (
    <div className="introduction">
       <Header/>
        <div className="elementos">
            <p>Explore a natureza de forma digital</p>
            <Link className='link' to="/plantas">Acessar catálogo</Link>
        </div>
    </div>
  )
}

export default Introduction;