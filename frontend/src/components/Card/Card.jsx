import React from 'react';
import "./Card.css";
import { Link } from 'react-router-dom';

const Card = ({_id, nome, imgUrl}) => {
  return (
    <Link to={`/plantas/${_id}`} className='card-planta'>
        <div className='area-imagem'>
            <img src="/imagem-de-planta.avif" alt="Imagem teste" />
        </div>
        <div className='area-nome'>
            <p>{nome}</p>
        </div>
    </Link> 
  )
}

export default Card