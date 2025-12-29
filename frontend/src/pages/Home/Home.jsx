import React from 'react';
import "./Home.css";
import  { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card.jsx';
//import { plantas } from '../../assets/database/plants.js';
import Header from '../../components/Header/Header.jsx';
import { getPlantas } from '../../api/plantas.js';

const Home = () => {

  const [plantas, setPlantas] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    async function obterPlantas() {
      const dados = await getPlantas();
      setPlantas(dados)
    }
    obterPlantas();
  }, []);

  const plantasFiltradas =
    busca.trim() === ""
      ? plantas
      : plantas.filter(planta =>
          planta.nome.toLowerCase().includes(busca.toLowerCase())
        );

  return (
    <div className="home">
      <Header/>
         <div className='opcoes'>
            <input 
                className='barra-pesquisa' 
                placeholder='Buscar planta...'
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
            ></input>

            <button className='botoes'>Pesquisar</button>

            <Link to={"/plantas/criar"} className='botoes'>Adicionar</Link>
        </div>
        <div className='catalogo'>
            
            {plantasFiltradas.map(p => (
              <Card
                _id={p._id}
                key={p._id + p.nome}
                nome={p.nome}
                imgUrl={p.imagemUrl}
              ></Card>
            ))}

        </div>
    </div>
  )
}

export default Home;