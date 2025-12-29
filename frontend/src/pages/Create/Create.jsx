import React, { useState } from "react";
import "./Create.css";
import { Link } from "react-router-dom";
import imagemSeta from "/arrow-left.svg";
import Header from "../../components/Header/Header.jsx";
import { postPlantas } from "../../api/plantas.js"

const Create = () => {

  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
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

  const submeterPlanta = async (e) => {
      e.preventDefault()

      try{
          const novaPlanta = {
              nome,
              categoria,
              descricao,
              imagem,
          };

          const plantaCriada = await postPlantas(novaPlanta);
          console.log("Planta criada: ", plantaCriada);
      } catch (error){
          console.error(error.message)
      }

      setNome("");
      setCategoria("");
      setDescricao("");
      setImagem(null);
  }

  return (
    <div className='create'>
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
                            value={nome} 
                            placeholder='Nome da planta...'
                            onChange={(e) => setNome(e.target.value)}>
                        </input>
                        
                        <input 
                            type='text' 
                            id='categoriaPlanta' 
                            name='categoriaPlanta'  
                            value={categoria} 
                            placeholder='Categoria da planta...'
                            onChange={(e) => setCategoria(e.target.value)}>
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