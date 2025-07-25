import React from 'react';
import "./Home.css";
import  { Link } from "react-router-dom";
import Card from '../../components/Card/Card.jsx';
import { plantas } from '../../assets/database/plants.js';

const Home = () => {
  return (
    <div className="home">
         <div className='opcoes'>
            <input className='barra-pesquisa' placeholder='Buscar planta...'></input>
            <button className='botoes'>Pesquisar</button>
            <Link className='botoes'>Adicionar</Link>
        </div>
        <div className='catalogo'>
            
            {plantas.map(p => (
              <Card
                _id={p._id}
                key={p._id}
                nome={p.nome}
              ></Card>
            ))}

        </div>
    </div>
  )
}

export default Home;