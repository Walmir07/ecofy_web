import React, { useState } from 'react';
import "./Edit.css";
import { plantas } from '../../assets/database/plants';
import { Link, useParams } from 'react-router-dom';
import imagemSeta from "/arrow-left.svg";
import Header from '../../components/Header/Header.jsx';

const Edit = () => {

  const { id } = useParams();
  console.log(id);

  const { nome, categoria, descricao, imagemUrl} = plantas.filter(
    (plantaAtual) => plantaAtual._id === id
  )[0];

  const [novoNome, setNovoNome] = useState(nome);
  const [novoTipo, setNovoTipo] = useState(categoria);
  const [novaDescricao, setNovaDescricao] = useState(descricao);
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

  /*const addPlanta = async (novaPlanta) => {
  const response = await fetch('/api/plantas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novaPlanta),
  });
};*/

const submeterPlanta = (e) => {
  e.preventDefault();
  const novaPlanta = {

    novoNome,
    novoTipo,
    novaDescricao,
    novaImagem

  };

  console.log(novaPlanta);

  addPlanta(novaPlanta);
  
  setNovoNome('');
  setNovoTipo('');
  setNovaDescricao('');
  setNovaImagem(null);

}


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
            <form className='formulario' onSubmit={submeterPlanta}>
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