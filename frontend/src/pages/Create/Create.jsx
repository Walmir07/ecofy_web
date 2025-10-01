import React, { useState } from 'react';
import "./Create.css";
import { Link } from 'react-router-dom';
import imagemSeta from "/arrow-left.svg";

const Create = () => {

  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState(null);

  const uploadImagemPlanta = (event) => {
      const file = event.target.files[0];
        if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagem(reader.result);
        };
        reader.readAsDataURL(file);
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

    nome,
    tipo,
    descricao,
    imagem

  };

  console.log(novaPlanta);

  addPlanta(novaPlanta);
  
  setNome('');
  setTipo('');
  setDescricao('');
  setImagem(null);

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
            <form className='formulario' onSubmit={submeterPlanta}>
                <div className="area-inputs">
                  
                    <div className="dados">

                        <input 
                            type='text'
                            id='nomePlanta' 
                            name='nomePlanta' 
                            value={nome} 
                            placeholder='Nome da planta...'
                            onChange={(e) => setNome(e.target.value)}>
                        </input>
                        
                        <input 
                            type='text' 
                            id='tipoPlanta' 
                            name='tipoPlanta'  
                            value={tipo} 
                            placeholder='Tipo da planta...'
                            onChange={(e) => setTipo(e.target.value)}>
                        </input>
                        
                        <textarea 
                            type='text' 
                            id='descricaoPlanta' 
                            name='descricaoPlanta' 
                            value={descricao} 
                            placeholder='Descrição da planta...'
                            onChange={(e) => setDescricao(e.target.value)}>
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
                            <span className="addImagemPlanta">{imagem ? "" : "+"}</span>
                            {imagem && <img className='preview-imagem' src={imagem} alt="Uploaded" />}
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

export default Create