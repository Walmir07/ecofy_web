import { obterPlantas, buscarPlanta, criarPlanta, atualizarPlanta, deletarPlanta } from "../models/plantasModel.js";
import cloudinary from "./cloudinary.js";

export async function listarPlantas(req, res) {
    const plantas = await obterPlantas();
    res.status(200).json(plantas);
}

export async function buscarPlantaPorId(req, res) {

    const id = req.params.id;

    try {
        const resultado = await buscarPlanta(id);
        res.status(200).json(resultado);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ "Erro": "Erro ao buscar planta." });
    }
}

export async function criarNovaPlanta(req, res) {
  try {
    let imagemUrl = null;

    if (req.file) {
      const upload = await cloudinary.uploader.upload(
        `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`
      );
      imagemUrl = upload.secure_url;
    }

    const novaPlanta = {
      nome: req.body.nome,
      categoria: req.body.categoria,
      descricao: req.body.descricao,
      imagemUrl,
    };

    const plantaCriada = await criarPlanta(novaPlanta);
    res.status(201).json(plantaCriada);

  } catch (error) {
    console.error(error);
    res.status(500).json({ Erro: "Falha ao criar planta" });
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