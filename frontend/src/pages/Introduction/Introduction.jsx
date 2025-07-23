import React from 'react';
import "./Introduction.css";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <div className="container">
        <p>Explore a natureza de forma digital</p>
        <Link className='link' to="/">Acessar catálogo</Link>
    </div>
  )
}

export default Introduction;