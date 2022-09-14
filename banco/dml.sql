select      id_admin 	   id,
            ds_email	   email,
            nm_admin       nome
        from tb_admin
        where ds_email 		            = 'fellguto@gmail.com'
        and ds_senha			        = '12345';

insert into tb_projeto (nm_projeto, ds_projeto,vl_meta)
                   values (?,?,?);