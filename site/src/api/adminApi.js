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

export async function listarDoadorNome(nome){
    const resposta = api.get(`/admin/doador/nome=${nome}`);
    return resposta.data
}

export async function listarDoadorCpf(cpf){
    const resposta = api.get(`/admin/doador/cpf=${cpf}`);
    return resposta.data
}

export async function listarDoadorEmail(email){
    const resposta = api.get(`/admin/doador/email=${email}`);
    return resposta.data
}