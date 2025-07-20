import fs from "fs";
import { obterPlantas, criarPlanta, atualizarPlanta, deletarPlanta } from "../models/plantasModel.js";

export async function listarPlantas(req, res) {
    const plantas = await obterPlantas();
    res.status(200).json(plantas);
}

export async function criarNovaPlanta(req, res){
    const novaPlanta = req.body;
    try {
        const plantaCriada = await criarPlanta(novaPlanta);
        res.status(200).json(plantaCriada);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({"Erro":"Falha na requisição"});
    }
}

export async function uploadImagem(req, res){

    const novaPlanta = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try {
        const plantaCriada = await criarPlanta(novaPlanta);
        const imagemAtualizada = `uploads/${plantaCriada.insertedId}.png`;
        fs.renameSync(req.file.path, imagemAtualizada);
        res.status(200).json(plantaCriada);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({"Erro":"Falha na requisição"});
    }
}

export async function atualizarDadosPlanta(req, res){

    const id = req.params.id;
    const dadosNovos = req.body;

    try {
        const resultado = await atualizarPlanta(id, dadosNovos);
        res.status(200).json(resultado);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({"Erro":"Erro ao atualizar planta."});
    }
}

export async function removerPlanta(req, res){
    
    const id = req.params.id;

    try {
        const remover = await deletarPlanta(id);
        res.status(200).json(remover);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({"Erro":"Erro ao remover planta."});
    }

}