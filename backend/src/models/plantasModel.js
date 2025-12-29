import conectarAoBanco from "../config/db.js";
import { ObjectId } from "mongodb"; //Teste para modelo de atualizar planta.

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function obterPlantas() {
    const db = conexao.db("EcofyDB");
    const colecao = db.collection("plantas");
    return colecao.find().toArray();
};

export async function buscarPlanta(id) {
    const db = conexao.db("EcofyDB");
    const colecao = db.collection("plantas");
    const objId = new ObjectId(id);
    return colecao.findOne({ _id: objId });
}


export async function criarPlanta(novaPlanta) {
    const db = conexao.db("EcofyDB");
    const colecao = db.collection("plantas");
    return colecao.insertOne(novaPlanta);
}

export async function atualizarPlanta(id, novosDados) {
    const db = conexao.db("EcofyDB");
    const colecao = db.collection("plantas");

    const objId = new ObjectId(id);

    return colecao.updateOne(
        { _id: objId }, // Filtro: encontra o documento pelo seu _id
        { $set: novosDados } // Ação: atualiza os campos com os valores de 'novosDados'
    );
}

export async function deletarPlanta(id){
    const db = conexao.db("EcofyDB");
    const colecao = db.collection("plantas");

    const objId = new ObjectId(id);

    return colecao.deleteOne(
        {_id: objId}
    )
}