import conectarAoBanco from "../config/db.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function obterPlantas() {
    const db = conexao.db("EcofyDB");
    const colecao = db.collection("plantas");
    return colecao.find().toArray();
};

export async function criarPlanta(novaPlanta) {
    const db = conexao.db("EcofyDB");
    const colecao = db.collection("plantas");
    return colecao.insertOne(novaPlanta);
}