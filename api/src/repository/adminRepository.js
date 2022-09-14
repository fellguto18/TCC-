import { con } from './connection.js'
//login admin
export async function login(email, senha){
    const comando = 
            `select      id_admin 	   id,
            ds_email	   email,
            nm_admin       nome
        from tb_admin
        where ds_email 		            = ?
        and ds_senha			        = ?`
    
    const resp = await con.query(comando, [email,senha])
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


