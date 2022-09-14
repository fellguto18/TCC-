import { con } from './connection.js'

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