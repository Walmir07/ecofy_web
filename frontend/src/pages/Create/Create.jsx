import React from 'react';
import "./Create.css";
import { Link } from 'react-router-dom';
import imagemSeta from "/arrow-left.svg";

const Create = () => {
  return (
    <div className='create'>
        <div className="area-voltar">
          <Link to={"/plantas"} className='voltar'>
            <img src={imagemSeta} alt="Seta para voltar" />
            <p>Voltar</p>
          </Link>
        </div>
        <div className='area-formulario'>
            <div className='formulario'>
                <div className="area-inputs">
                    <div className="dados">
                        <input type='text' placeholder='Nome da planta...'></input>
                        <input type='text' placeholder='Nome da planta...'></input>
                        <textarea type='text' placeholder='Nome da planta...'></textarea>
                    </div>
                    <div className="imagem">
                        <p>Imagem</p>
                        <input type="file" />
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