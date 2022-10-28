import { con } from './connection.js'

//consultar todos projetos

export async function listarTodosProjetos(){
    const comando = 
    `select id_projeto   id,
            nm_projeto   nome,
            ds_projeto   descricao,
            vl_meta      meta
        from tb_projeto`
    const resp = await con.query(comando);
    return resp[0]
}

//buscarProjetoporID

export async function listarProjetoPorID(id){
    const comando =
    `select id_projeto   id,
            nm_projeto   nome,
            ds_projeto   descricao,
            vl_meta      meta,
            img_projeto  imagem
        from tb_projeto
        where id_projeto = ?`;
    const [linhas] = await con.query(comando,[id]);
    return linhas[0];    
}

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

//ver todos doadores

export async function listarTodosDoadores(){
    const comando =
    `select nm_projeto as projeto,
            nm_usuario as doador,
            vl_doacao  as valor,
            dt_doacao  as data
        from tb_doacao
        inner join tb_usuario
        on tb_doacao.id_usuario = tb_usuario.id_usuario
        inner join tb_projeto
        on tb_projeto.id_projeto = tb_doacao.id_projeto;`
    const resposta = await con.query(comando);
    return resposta[0];
}


//ver doadores
export async function consultarDoador(filtro){
    
    const comando =
    `select id_usuario  id,
            nm_usuario  nome,
            ds_email    email,
            ds_cpf      cpf
        from tb_usuario
        where nm_usuario like '%${filtro}%' or ds_email like '%${filtro}%' or ds_cpf like '%${filtro}%'`
    const resposta = await con.query(comando, filtro);
    const linhas = resposta[0];
    return linhas;
}

//nossos projetos
export async function nossosProjetos(){
    const comando = 
    `select nm_projeto   nome,
            img_projeto
        from tb_projeto`
    const resp = await con.query(comando);
    return resp[0]
}

