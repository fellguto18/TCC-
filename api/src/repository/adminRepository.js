import { con } from './connection.js'

//login admin
export async function login(email, senha){
    const comando = 
            `select
            id_admin 	   id,
            ds_email	   email,
            nm_admin       nome
        from tb_admin
        where ds_email 		            = ?
        and ds_senha			        = ?`
    
    const resp = await con.query(comando, [email,senha]);
    const linhas = resp[0];
    return linhas[0];
}

//adicionar projeto
export async function adicionarProjeto(projeto){
    const comando =
    `insert into tb_projeto (nm_projeto, ds_projeto,vl_meta)
                   values (?,?,?)`
    const [resposta] = await con.query(comando, [projeto.nome, projeto.descricao, projeto.meta]);
    projeto.id = resposta.insertId;

    return projeto;
}

// deletar projeto
export async function removerProjeto(id){
    const comando = 
    ` delete from tb_projeto
                 where id_projeto = ?`;
    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows;
}

// alterar imagem do projeto
export async function alterarImagem(imagem, id) {
    const comando =
        `update tb_projeto
        set img_projeto  = ?
        where id_projeto = ? `;
    
    const [resposta] = await con.query(comando, [imagem, id]);
    return resposta.affectedRows;
}

//editar projeto

export async function editarProjeto(nome, projeto) {
    const comando =
        `update tb_projeto
        set nm_projeto   = ?,
            vl_meta      = ?,
            ds_projeto   = ?
        where nm_projeto like '${nome}' `;
    
    const [resposta] = await con.query(comando, [projeto.nome, projeto.meta, projeto.descricao, nome]);
    return resposta.affectedRows;
}

//consultar projetos

export async function consultarProjetos(nome){
    const comando =
    `select id_projeto   id,
            nm_projeto   nome,
            vl_meta      meta,
            ds_projeto   descrição,
            img_projeto  imagem,
            vl_obtido    obtido
        from tb_projeto
        where nm_projeto like '%${nome}%'`
    const resposta = await con.query(comando, nome);
    const linhas = resposta[0];
    return linhas;
}

//ver doadores

export async function consultarDoadorNome(nome){
    const comando =
    `select id_usuario  id,
            nm_usuario  nome,
            ds_email    email,
            ds_cpf      cpf
        from tb_usuario
        where nm_usuario like '%${nome}%' `
    const resposta = await con.query(comando, nome);
    const linhas = resposta[0];
    return linhas;
}
export async function consultarDoadorEmail(email){
    const comando =
    `select id_usuario  id,
            nm_usuario  nome,
            ds_email    email,
            ds_cpf      cpf
        from tb_usuario
        where ds_email like '%${email}%' `
    const resposta = await con.query(comando, email);
    const linhas = resposta[0];
    return linhas;
}
export async function consultarDoadorCpf(cpf){
    const comando =
    `select id_usuario  id,
            nm_usuario  nome,
            ds_email    email,
            ds_cpf      cpf
        from tb_usuario
        where ds_cpf like '%${cpf}%' `
    const resposta = await con.query(comando, cpf);
    const linhas = resposta[0];
    return linhas;
}

