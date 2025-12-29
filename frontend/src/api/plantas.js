const BASE_URL = "http://localhost:3000"

export async function getPlantas(){
    const res = await fetch(`${BASE_URL}/plantas`);

    if(!res.ok) {
        throw new Error("Erro ao buscar plantas!");
    }

    return res.json()
}

export async function getPlantaPorId(id) {
  const res = await fetch(`${BASE_URL}/plantas/${id}`);

  if(!res.ok) {
    throw new Error("Erro ao buscar planta por id!");
  }

  return res.json();
}

export async function postPlantas(dadosPlanta) {
  const res = await fetch(`${BASE_URL}/plantas`, {
    method: "POST",
    body: dadosPlanta,
  });

  if (!res.ok) throw new Error("Erro ao criar planta!");
  return res.json();
}

export async function putPlantas(id, dadosPlanta) {
    const res = await fetch(`${BASE_URL}/plantas/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosPlanta),
    })

    if(!res.ok){
        throw new Error("Erro ao atualizar planta!")
    }
    return res.json();

}

export async function deletePlanta(id) {
    const res = await fetch(`${BASE_URL}/plantas/${id}`, {
        method: "DELETE",

    }) 

    if(!res.ok){
        throw new Error("Erro ao deletar planta!");
    }

    return true;

}