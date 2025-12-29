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
  setImagem(event.target.files[0]); // só guarda o arquivo real
};

const submeterPlanta = async (e) => {
  e.preventDefault();

  if (!nome || !categoria || !descricao) {
    alert("Preencha todos os campos!");
    return;
  }

  try {
    const formData = new FormData();
    formData.append("nome", nome);
    formData.append("categoria", categoria);
    formData.append("descricao", descricao);
    if (imagem) formData.append("imagem", imagem);

    const plantaCriada = await postPlantas(formData); // vamos ajustar postPlantas
    console.log("Planta criada: ", plantaCriada);

    setNome("");
    setCategoria("");
    setDescricao("");
    setImagem(null);
  } catch (error) {
    console.error(error);
    alert("Erro ao criar planta!");
  }
};

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
                            {imagem && (
  <img
    className="preview-imagem"
    src={URL.createObjectURL(imagem)}
    alt="Preview"
  />
)}
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