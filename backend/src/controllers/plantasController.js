import { obterPlantas } from "../models/plantasModel.js";

export async function listarPlantas(req, res) {
    const plantas = await obterPlantas();
    res.status(200).json(plantas);
}