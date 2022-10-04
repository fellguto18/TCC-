import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function login(email, senha) {
    const r = await api.post('/admin/login', {
          email:email,
          senha:senha
    });

    return r.data;
}

export async function listarTodosDoadores(){
    const resposta = await api.get('/admin/doadores')
    return resposta.data
}

export async function pesquisarDoador(filtro){
    const resposta = api.get(`/admin/doador?data=${filtro}`);
    return resposta.data
}

