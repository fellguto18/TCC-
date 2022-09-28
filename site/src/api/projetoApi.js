import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function cadastrarProjeto(nome, descricao, meta){
    const resposta = await api.post('/admin/projeto', {
        nome : nome,
        descricao : descricao,
        meta: meta,
    })
    return resposta.data;
}

export async function enviarImagemProjeto(id, imagem){
    const formData = new FormData();
    formData.append('imagem', imagem);

    const resposta = await api.put(`/admin/projeto/${id}/imagem`, formData, {
        headers: {
            "Content-Type" : "multipart/form-data",
        },
    });
    return resposta.status;
}