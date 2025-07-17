import { obterPlantas, criarPlanta } from "../models/plantasModel.js";

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