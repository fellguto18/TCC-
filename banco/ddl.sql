create database CPAPN_db;
use CPAPN_db;


create table tb_admin(
id_admin  int primary key auto_increment,
nm_admin  varchar(50),
ds_email  varchar(100),
ds_senha  varchar(20)
);
create table tb_projeto(
id_projeto   int primary key auto_increment,
nm_projeto   varchar(100),
vl_meta      decimal(15.5),
ds_projeto   varchar(400),
img_projeto  varchar(400),
vl_obtido    decimal(15.5)
);

create table tb_usuario(
id_usuario   int primary key auto_increment,
nm_usuario   varchar(50),
ds_cpf       varchar(15),
ds_email     varchar(100),
ds_senha     varchar(20),
ds_confirmar varchar(20)
);

create table tb_doacao(
id_doacao    int primary key auto_increment,
id_usuario   int,
id_projeto   int,
vl_doacao    decimal(15.5),
FOREIGN KEY (id_usuario) references tb_usuario (id_usuario),
FOREIGN KEY (id_projeto) references tb_projeto (id_projeto)
);