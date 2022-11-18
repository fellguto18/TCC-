import { con } from './connection.js';
// cadastrar usuário

export async function cadastrarUsuario(usuario){
    const comando = 
        `insert into tb_usuario (nm_usuario,ds_cpf, ds_email, ds_senha)
            values (?, ?, ?, ? )`
    const [resposta] = await con.query(comando, [usuario.nome, usuario.cpf,usuario.email, usuario.senha]);
    usuario.id = resposta.insertId;

    return usuario;
}

// login usuario

export async function loginUsuario(email, senha){
    const comando = 
        `select     id_usuario        id,
                    ds_email          email,
                    nm_usuario        nome
        from tb_usuario
        where ds_email                = ?
        and ds_senha                  = ?`;

    const resp = await con.query(comando, [email,senha]);
    const linhas = resp[0];
    return linhas[0];
}

//Fazer doação
export async function realizarDoacao(usuario, projeto, doacao, data){
    const comando = `
        insert into tb_doacao(id_usuario, id_projeto, vl_doacao, dt_doacao)
                       values(?, ?, ?, ?)
    `;
    const [result] = await con.query(comando, [usuario, projeto, doacao, data]);
    return result.insertId;
}