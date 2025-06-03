import express, { json } from "express";
import { listarPlantas } from "../controllers/plantasController.js";

const routes = (app) => {

    app.use(express.json());

    app.get("/", async (req, res) => {
        res.status(200).send("Bem vindo ao Ecofy!")
    })

    app.get("/plantas", listarPlantas);

}

export default routes;
