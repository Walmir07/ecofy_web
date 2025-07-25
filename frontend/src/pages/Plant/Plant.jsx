import React from 'react';
import "./Plant.css";
import { useParams } from 'react-router-dom';
import { plantas } from '../../assets/database/plants';

const Plant = () => {

  const { id } = useParams();
  console.log(id);

  const { nome, categoria, descricao, imagemUrl} = plantas.filter(
    (plantaAtual) => plantaAtual._id === id
  )[0];

  return (
    <div className='plant'>
        <div className="area-voltar">
            <p>Voltar</p>
        </div>
        <div className='area-planta'>
            <div className='planta'>
                <p>{nome}</p>
                <p>{categoria}</p>
                <p>{descricao}</p>
                <p>{imagemUrl}</p>
            </div>
        </div>
    </div>
  )
}

export default Plant