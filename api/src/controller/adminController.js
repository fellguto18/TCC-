import { Router } from 'express';
import { login, adicionarProjeto, removerProjeto, alterarImagem, consultarProjetos, consultarDoador, editarProjeto, listarTodosDoadores, listarTodosProjetos } from '../repository/adminRepository.js';

import multer from 'multer';

const upload = multer({ dest: 'storage/imgProjetos' })
const server = Router();

//adm login
server.post('/admin/login', async (req, resp) => {
    try{
        const {email, senha} = req.body;
        const resposta =  await login(email, senha);
        if(!resposta){
            throw new Error('Credenciais inválidas')
        }


        resp.send(resposta)
    }catch(err){
        resp.status(401).send({
            erro: err.message
        })
    }
})

export default server;

//cadastrar novo projeto
server.post('/admin/projeto', async (req, resp) => {
    try {
        const projetoParaInserir = req.body;
       
        if (!projetoParaInserir.nome)
            throw new Error('Nome do projeto é obrigatório!');

        if (!projetoParaInserir.descricao)
            throw new Error('Descrição do projeto é obrigatória!');

        if (isNaN(projetoParaInserir.meta) || projetoParaInserir.meta == undefined || projetoParaInserir.meta <= 0)
            throw new Error('A meta do projeto é obrigatória!');

        const projetoInserido = await adicionarProjeto(projetoParaInserir);
        resp.send(projetoInserido);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

//deletar projeto
server.delete('/admin/projeto/:id', async (req, resp) => {
    try {
        const { id } = req.params;

        const resposta = await removerProjeto(id);

        if (resposta != 1)
            throw new Error('projeto não pode ser removido')
        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

//alterar imagem do projeto
server.put('/admin/projeto/:id/imagem', upload.single('imagem'), async (req, resp) => {
    try {
        const { id } = req.params;
        const imagem = req.file.path;

        const resposta = await alterarImagem(imagem, id);
        if (resposta != 1)
            throw new Error('A imagem não pode ser salva.');

        resp.status(204).send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

//alterar projeto
server.put('/admin/projeto/:nome', async (req, resp) => {
    try {
        const { nome } = req.params;
        const projeto = req.body;
        const resposta = await editarProjeto(nome, projeto);
      
        if ( !resposta.nome )
            throw new Error('O nome do projeto é obrigatório.');
        if ( !resposta.meta )
            throw new Error('A meta do projeto é obrigatória.');
        if ( !resposta.descricao )
            throw new Error('A descrição do projeto é obrigatória.');
    
            
            
        resp.status(204).send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})
//selecionar todos projetos
server.get('/admin/projetos', async (req, resp) => {
    try{
        const resposta = await listarTodosProjetos();
        resp.send(resposta)

        if(!resposta)
            throw new Error('Não há projetos!')
    }
    catch(err){
        resp.status(400).send([
            err.message
        ])
    }
})


//selecionar projeto

server.get('/admin/projeto?', async (req,resp) => {
    try{

        const {nome} = req.query;
        const resposta = await consultarProjetos(nome);
        if(!resposta)
            throw new Error('Projeto não encontrado!');
        resp.send(resposta);
    }
    catch(err){
        resp.status(400).send({
            erro:err.message
        })
    }
})

//listar todos os doadores

server.get('/admin/doadores', async (req, resp) => {
    try{
        const resposta = await listarTodosDoadores();
        resp.send(resposta);         
    }
    catch{
        resp.status(400).send({
        erro:err.message
    })      
    }
})

//consultar doador
server.get('/admin/doador?data', async (req,resp) => {
    try{
        const { filtro } = req.query; 
        const resposta = await consultarDoador(filtro);
        
        if(!resposta)
            throw new Error('Doador não encontrado!');
        resp.send(resposta);
    }
    catch(err){
        resp.status(400).send({
            erro:err.message
        })
    }
})

