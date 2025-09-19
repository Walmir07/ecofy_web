import React, { useState } from 'react';
import "./Create.css";
import { Link } from 'react-router-dom';
import imagemSeta from "/arrow-left.svg";

const Create = () => {

  const [imagem, setImagem] = useState(null);

  const uploadImagemPlanta = (event) => {
      const file = event.target.files[0];
        if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagem(reader.result); // Atualiza o estado com a imagem carregada
        };
        reader.readAsDataURL(file); // Lê o arquivo como uma URL de dados
    }
  };

  const addPlanta = async (novaPlanta) => {
  const response = await fetch('/api/plantas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novaPlanta),
  });
};

const submeterPlanta = (e) => {
  e.preventDefault();
  const novaPlanta = {

    nomeProjeto, // 1 - Adicionar dados das plantas

  };

  console.log(novaPlanta);

  addPlanta(novaPlanta);
  
  setImagem(null); // 2 - Adicionar os sets dos dados

}


  return (
    <div className='create'>
        <div className="area-voltar">
          <Link to={"/plantas"} className='voltar'>
            <img src={imagemSeta} alt="Seta para voltar" />
            <p>Voltar</p>
          </Link>
        </div>
        <div className='area-formulario'>
            <div className='formulario' onSubmit={submeterPlanta}>
                <div className="area-inputs">
                    <div className="dados">
                        <input type='text' placeholder='Nome da planta...'></input>
                        <input type='text' placeholder='Nome da planta...'></input>
                        <textarea type='text' placeholder='Nome da planta...'></textarea>
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
                            <span className="add-image">{imagem ? "" : "+"}</span>
                            {imagem && <img src={imagem} alt="Uploaded" />}
                        </label>

                    </div>
                </div>
                <div className="area-salvar">
                  <button className="salvar">Salvar</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Create