import React from 'react';
import "./Home.css";
import  { Link } from "react-router-dom";
import Card from '../../components/Card/Card.jsx';
import { plantas } from '../../assets/database/plants.js';
import Header from '../../components/Header/Header.jsx';

const Home = () => {
  return (
    <div className="home">
      <Header/>
         <div className='opcoes'>
            <input className='barra-pesquisa' placeholder='Buscar planta...'></input>
            <button className='botoes'>Pesquisar</button>
            <Link to={"/plantas/criar"} className='botoes'>Adicionar</Link>
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