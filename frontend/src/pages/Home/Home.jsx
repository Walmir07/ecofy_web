import React from 'react';
import "./Home.css";
import  { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
        <div className='opcoes'>
          <input className='barra-pesquisa' placeholder='Buscar planta...'></input>
          <button className='botoes'>Pesquisar</button>
          <Link className='botoes'>Adicionar</Link>
        </div>
        <div className='catalogo'>
          <p>Aqui ficará o catálogo</p>
        </div>
    </div>
  )
}

export default Home;