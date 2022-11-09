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

export async function alterarProjeto(id, nome, descricao, meta){
    const resposta = await api.put(`/admin/projeto/${id}`, {
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

export async function listarProjeto() {
    const resposta = await api.get('/nossosProjetos');
    return resposta.data;
}

export async function listarProjetoPorID(id){
    const resposta = await api.get(`/projeto/${id}`);
    return resposta.data;
}

export function buscarImagem(imagem){
    return `${api.getUri()}/${imagem}`
}