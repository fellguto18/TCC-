const express = require('express')
const nodemailer = requier('nodemailer');
const api = express()

const port = 3000

const user = "contato@usefulapps.top"
const pass = "Teste1234"

api.get('/', (req , res) => res.send('Insira seu e-mail'))

app.get('/send',(req, res) => {

    const transporter = nodemailer.createTransport({
        host:"smpt.umbler.com",
        port:587,
        auth:{  user, pass  }

    })


    transporter.sendMail({
        from: user,
        to: user,
        replyTo: "contato@programadorbr.com",
        subject: "Olá bem vindo a Caapc, a associação prevenida contra o cancer de pele e maleficios da sociedade malefica atual",
        text: "Seja Bem-vinde(a/o) a religião machado 98",
    }).then(info =>{
        res.send(info)
    }).catch(error =>{
        res.send(error)
    })



})

app.listen(port,() => console.log(`Rodando na porta ${port}!`))