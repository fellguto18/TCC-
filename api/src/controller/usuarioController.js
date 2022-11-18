import { Router } from "express";
import { cadastrarUsuario, loginUsuario, realizarDoacao } from "../repository/usuarioRepository.js";

import nodemailer from 'nodemailer'

const server = Router();

// cadastrar usuario
server.post('/usuario/cadastro', async (req, resp) => {
    try{
        const usuarioParaInserir = req.body;
        console.log(usuarioParaInserir);
        if(!usuarioParaInserir.nome){
            throw new Error('Nome do usuário é obrigatório!');
        }
        if(!usuarioParaInserir.cpf){
            throw new Error('CPF do usuário é obrigatório');
        }
        if(!usuarioParaInserir.email){
            throw new Error('Email do usuário é obrigatório!');
        }
        if(!usuarioParaInserir.senha){
            throw new Error('Senha é obrigatória');
        }
        
        const usuarioInserido = await cadastrarUsuario(usuarioParaInserir);
        resp.send(usuarioInserido);
    }
    catch(err){
        resp.status(401).send({
            erro: err.message
        })
    }
})

//login usuario
server.post('/usuario/login', async (req,resp) => {
    try{
        const {email, senha} = req.body;
        const resposta = await loginUsuario(email, senha);

        if(!resposta){
            throw new Error('Credenciais inválidas');
        }
        
        resp.send(resposta)
    }
    catch(err){
        resp.status(401).send({
            erro: err.message
        })
    }
})

//Fazer doação

server.post('/usuario/doacao', async (req,resp) => {
    try{
        const {projeto, usuario, doacao, data} = req.body;
        const resposta = await realizarDoacao(usuario, projeto, doacao, data);
        if(!usuario)
            throw new Error('Faça seu login!')
        if(!projeto)
            throw new Error('Selecione um Projeto!');
        if(!doacao)
            throw new Error('Selecione um valor a ser doado!');
        if(!data)
            throw new Error('Coloque a data da doação!');

        
        resp.send({id:resposta})
    }
    catch(err){
        resp.sendStatus(401).send({
            erro:err.message
        })
    }
})


//enviar-email-recuperar-senha
server.post('/enviar-email', async (req, resp) => {
    
    let data = req.body;
    const transport = nodemailer.createTransport({
    host: process.env.HOST,
    service: process.env.SERVICE,
    secure:process.env.SECURE,
    auth:{
        user: process.env.EMAIL,
        pass: process.env.SENHA
    }
    })

    const codigo = parseInt(Math.random() * 9999);
    
    const message = {
    from: process.env.EMAIL,
     to: data.email,
     subject:'Nat',
     html: `,
     <div style="background-color:#fbdcff;padding:10px;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
    <div style="max-width:650px;margin:0 auto">
        <div style="background:#fff;font-size:14pt;color:#686f7a;border-top:4px solid rgb(120, 0, 175);margin-bottom:20px">
        
            <div style="padding:10px 20px;clear:both">
                <div style="font-size:0.8em;line-height:1.5em;border-bottom:1px solid #f2f3f5;padding-bottom:10px;margin-bottom:10px;">
                    <p>
                        <a style="text-decoration:none;color:black">
                            <b>Redefinição de Senha</b>
                        </a>
                    </p>
                    <div style="color:#000">
                        <p style="color:rgb(113, 50, 142)">
                            Oi</b>! <br>
                            <b style="color:#000000;">Para redefinir sua senha, basta seguir o link abaixo:</b> <br>
                            
                        </p>
                        <a href="http://localhost:3000/login/concluir-senha">
                            <button style="color: white; background-color:rgb(113, 50, 142); border: none; border-radius: 20px; padding: 1em; outline: none;"  >Clique aqui!</button>
                        </a>
                        <div>
                            Código: ${codigo}
                        </div>
                        <p style="color:#000">
                            Até logo! =) 
                        </p>
                    </div>
                    <p style="font-size:14px;margin-top:50px;">
                        Atenciosamente,<br>
                        Equipe do Caapc. <br>
                        <span style="color:#A52A2A"> ** Este é um e-mail automático, não responda. </span>
                    </p>
                </div>
            </div>
        </div>
        
     `
     
    }
    transport.sendMail(message, (error, info)=> {
        if (error) {
            return resp.status(400).send('Erro, tente novamente')
        }
        return resp.status(200).send('Email enviado com sucesso!')
    })
})


export default server;