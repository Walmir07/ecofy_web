import express from "express";

const plantas = [
    {nome: "rosa", tipo:"flor"}
]

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...")
})

app.get("/", (req, res) => {
    res.status(200).send("Bem vindo ao Ecofy");
})

app.get("/plantas", (req, res) => {
    res.status(200).send(plantas);
})