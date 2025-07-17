import express, { json } from "express";
import multer from "multer";
import { listarPlantas, criarNovaPlanta, uploadImagem } from "../controllers/plantasController.js";

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

    app.get("/", async (req, res) => {
        res.status(200).send("Bem vindo ao Ecofy!")
    })

    app.get("/plantas", listarPlantas);

    app.post("/plantas", criarNovaPlanta);

    app.post("/upload", upload.single("imagem"), uploadImagem);

}

export default routes;
