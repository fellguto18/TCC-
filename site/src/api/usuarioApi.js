import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function login(email, senha) {
    const r = await api.post('/usuario/login', {
          email:email,
          senha:senha
    });

    return r.data;
}
export async function cadastrarUsuario(nome,cpf,email,senha,confirmar){
    const resposta= await api.post('/usuario/cadastro',{
        nome:nome,
        cpf:cpf,
        email:email,
        senha:senha,
        confirmar:confirmar
    });

    return resposta.data;
}

export async function realizarDoacao(usuario, projetoId, valor, data){
    const resposta = await api.post('/usuario/doacao',{
        usuario:usuario,
        projeto:projetoId,
        doacao:valor,
        data:data
    });
    return resposta.data;
}



export async function enviarEmail(email){
    const resposta = await api.post('/enviar-email',{
        email: email
    });
    return resposta.data;
}

