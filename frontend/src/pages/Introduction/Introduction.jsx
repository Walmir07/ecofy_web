import React from 'react';
import "./Introduction.css";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <div className="introduction">
        <p>Explore a natureza de forma digital</p>
        <Link className='link' to="/home">Acessar catálogo</Link>
    </div>
  )
}

export default Introduction;