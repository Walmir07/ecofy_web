import express, { json } from "express";
import multer from "multer";
import cors from "cors";
import { listarPlantas, buscarPlantaPorId, criarNovaPlanta, uploadImagem, atualizarDadosPlanta, removerPlanta } from "../controllers/plantasController.js";

const APP_URL = "http://localhost:5173";

const corsOptions = {
  origin: APP_URL, //URL do front-end
  optionsSuccessStatus: 200
}

export const upload = multer({
  storage: multer.memoryStorage(),
});

const routes = (app) => {

    app.use(express.json());
    app.use(cors(corsOptions));

    app.get("/", async (req, res) => {
        res.status(200).send("Bem vindo ao Ecofy!");
    })

    app.get("/plantas", listarPlantas);

    app.get("/plantas/:id", buscarPlantaPorId);

    app.post("/plantas", upload.single("imagem"), criarNovaPlanta);

    app.put("/plantas/:id", atualizarDadosPlanta);

    app.delete("/plantas/:id", removerPlanta);
}

export default routes;
