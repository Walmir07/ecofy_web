import React from 'react';
import "./Plant.css";
import { Link, useParams, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
//import { plantas } from '../../assets/database/plants';
import imagemSeta from "/arrow-left.svg";
import Header from '../../components/Header/Header.jsx';
import { getPlantaPorId, deletePlanta } from '../../api/plantas.js';

const Plant = () => {
  
  const { id } = useParams();
  const [planta, setPlanta] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    async function obterPlanta() {
      try {
        const dados = await getPlantaPorId(id);
          setPlanta(dados);
        } catch (error) {
          console.error(error);
        }
    }

    obterPlanta();
  }, [id]);

  const { nome, categoria, descricao, imagemUrl} = planta;

  async function deletarPlanta(id) {
    try {
      await deletePlanta(id)
      alert("Planta deletada com sucesso!");
      navigate("/plantas");
    } catch (error) {
      console.error(error);
      alert("Erro ao deletar a planta.");
    }
  }

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
                  <button className="delelar" onClick={() => deletarPlanta(id)} >Deletar</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Plant