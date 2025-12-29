import React, { useState, useEffect } from 'react';
import "./Edit.css";
import { plantas } from '../../assets/database/plants';
import { Link, useParams, useNavigate } from 'react-router-dom';
import imagemSeta from "/arrow-left.svg";
import Header from '../../components/Header/Header.jsx';
import { getPlantaPorId, putPlantas } from '../../api/plantas.js';

const Edit = () => {

  const { id } = useParams();
  const [planta, setPlanta] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
  async function obterPlanta() {
    try {
      const dados = await getPlantaPorId(id);
      setPlanta(dados);

      // Atualiza os inputs com os dados existentes
      setNovoNome(dados.nome);
      setNovoTipo(dados.categoria);
      setNovaDescricao(dados.descricao);

    } catch (error) {
      console.error(error);
    }
  }

  obterPlanta();
}, [id]);


  const { nome, categoria, descricao, imagemUrl} = planta;

  const [novoNome, setNovoNome] = useState("");
  const [novoTipo, setNovoTipo] = useState("");
  const [novaDescricao, setNovaDescricao] = useState("");
  const [novaImagem, setNovaImagem] = useState(null);

  const uploadImagemPlanta = (event) => {
      const file = event.target.files[0];
        if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setNovaImagem(reader.result);
        };
        reader.readAsDataURL(file);
    }
  };


  const atualizarPlanta = async (e) => {
    e.preventDefault();

    const dadosAtualizados = {
        nome: novoNome,
        categoria: novoTipo,
        descricao: novaDescricao,
        imagemUrl: novaImagem || planta.imagemUrl,
    };

    try {
        await putPlantas(id, dadosAtualizados);
        alert("Planta atualizada com sucesso!");
        navigate(`/plantas`);
    } catch (error) {
        console.error(error);
        alert("Erro ao atualizar a planta.");
    }
  };

  return (
    <div className='edit'>
       <Header/>
        <div className="area-voltar">
          <Link to={"/plantas"} className='voltar'>
            <img src={imagemSeta} alt="Seta para voltar" />
            <p>Voltar</p>
          </Link>
        </div>
        <div className='area-formulario'>
            <form className='formulario' onSubmit={atualizarPlanta}>
                <div className="area-inputs">
                  
                    <div className="dados">

                        <input 
                            type='text'
                            id='nomePlanta' 
                            name='nomePlanta' 
                            value={novoNome} 
                            placeholder='Nome da planta...'
                            onChange={(e) => setNovoNome(e.target.value)}>
                        </input>
                        
                        <input 
                            type='text' 
                            id='tipoPlanta' 
                            name='tipoPlanta'  
                            value={novoTipo} 
                            placeholder='Tipo da planta...'
                            onChange={(e) => setNovoTipo(e.target.value)}>
                        </input>
                        
                        <textarea 
                            type='text' 
                            id='descricaoPlanta' 
                            name='descricaoPlanta' 
                            value={novaDescricao} 
                            placeholder='Descrição da planta...'
                            onChange={(e) => setNovaDescricao(e.target.value)}>
                        </textarea>
                   
                    </div>
                    <div className="imagem">

                        <p>Imagem</p>

                        <label htmlFor='imagemPlanta' className='imagem-planta'>
                            <input 
                                type='file'
                                id='imagemPlanta'
                                name='imagem'
                                accept='image/*'
                                onChange={uploadImagemPlanta}
                            />
                            <span className="addImagemPlanta">{novaImagem ? "" : "+"}</span>
                            {novaImagem && <img className='preview-imagem' src={novaImagem} alt="Uploaded" />}
                        </label>

                    </div>
                </div>
                <div className="area-salvar">
                  <button className="salvar" type='submit'>Salvar</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Edit