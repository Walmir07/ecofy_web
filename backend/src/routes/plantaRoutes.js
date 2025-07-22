import express, { json } from "express";
import multer from "multer";
import cors from "cors";
import { listarPlantas, criarNovaPlanta, uploadImagem, atualizarDadosPlanta, removerPlanta } from "../controllers/plantasController.js";

const corsOptions = {
  origin: "https://localhost:8000", //URL do front-end
  optionsSuccessStatus: 200
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
});
  
const upload = multer({ dest: "./uploads", storage });

const routes = (app) => {

    app.use(express.json());
    app.use(cors(corsOptions));

    app.get("/", async (req, res) => {
        res.status(200).send("Bem vindo ao Ecofy!");
    })

    app.get("/plantas", listarPlantas);

    app.post("/plantas", criarNovaPlanta);

    app.post("/upload", upload.single("imagem"), uploadImagem);

    app.put("/plantas/:id", atualizarDadosPlanta);

    app.delete("/plantas/:id", removerPlanta);
}

export default routes;
