select      id_admin 	   id,
            ds_email	   email,
            nm_admin       nome
        from tb_admin
        where ds_email 		            = 'fellguto@gmail.com'
        and ds_senha			        = '12345';

insert into tb_projeto (nm_projeto, ds_projeto,vl_meta)
                   values ('projeto cadeira de rodas','Arrecadação para a compra de cadeiras de rodas para pessoas necessitadas, amputadas, e com pouca mobilidade causados por câncer', 1200);

update tb_projeto
    set img_projeto = 'cadeira-de-rodas (1) 1.png'
    where id_projeto = 1;
    
 alter table tb_usuario add ds_confirmar varchar(20) after ds_senha;   

 select nm_projeto, 
	   nm_usuario,
       vl_doacao,
       dt_doacao
from tb_doacao
inner join tb_usuario on tb_doacao.id_usuario = tb_usuario.id_usuario
inner join tb_projeto on tb_doacao.id_projeto = tb_projeto.id_projeto;

insert into tb_doacao(id_usuario, id_projeto, vl_doacao, dt_doacao)
	values(1, 1, 50, '2022-11-18');
