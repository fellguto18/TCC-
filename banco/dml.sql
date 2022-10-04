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
