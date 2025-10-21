import React from 'react';
import "./Plant.css";
import { Link, useParams } from 'react-router-dom';
import { plantas } from '../../assets/database/plants';
import imagemSeta from "/arrow-left.svg";
import Header from '../../components/Header/Header.jsx';

const Plant = () => {

  const { id } = useParams();
  console.log(id);

  const { nome, categoria, descricao, imagemUrl} = plantas.filter(
    (plantaAtual) => plantaAtual._id === id
  )[0];

  return (
    <div className='plant'>
       <Header/>
        <div className="area-voltar">
          <Link to={"/plantas"} className='voltar'>
            <img src={imagemSeta} alt="Seta para voltar" />
            <p>Voltar</p>
          </Link>
        </div>
        <div className='area-planta'>
            <div className='planta'>
                <div className="informacoes">
                    <div className="imagem">
                        <img src={"/imagem-de-planta.avif"} alt="Imagem de paltas teste" />
                    </div>
                    <div className="dados">
                        <p>Nome: {nome}</p>
                        <p>Categoria: {categoria}</p>
                        <p>Descrição: {descricao}</p>
                    </div>
                </div>
                <div className="funcionalidades">
                  <Link to={`/plantas/${id}/editar`} className="editar">Editar</Link>
                  <button className="delelar">Deletar</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Plant