import { useEffect, useState } from "react";
import { toast, Toaster } from 'react-hot-toast'
import './esqueceusenha.scss';
import logo from '../../assets/images/logo.png'


import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import storage from 'local-storage';
import { useRef } from 'react';
import { enviarEmail } from "../../api/usuarioApi";



export default function EsqueceuSenha() {

    const [email, setEmail] = useState('');

    async function emailUser() {
        try {

            const emailUsuario = await enviarEmail(email);
            setEmail(emailUsuario)
            toast('E-mail enviado.')
        } catch (err) {
            toast('Erro')
        }
    }




    const navigate = useNavigate();
    const ref = useRef();
    function voltarClick() {
        storage.remove('usuario-logado');
        navigate('/usuario/cadastrar');
    }
    return (
        <div className='page-esqueceusenha'>
            <div className='logo-1'>
                <img src={logo} />
            </div>
            <div className='aaa'>
                <h1>Esqueci a senha</h1>
                <p>Para redefinir sua senha, nos informe seu e-mail já cadastrado no site.</p>

                <h4 className="emei">Email</h4>
                <input className='botau' type="text" placeholder='Insira seu E-mail aqui' value={email} onChange={e => setEmail(e.target.value)} />

                <div className='div-botao'>
                    <button onClick={emailUser} className='botoun'>Enviar</button>
                    <Link to='' className='botao-1' onClick={voltarClick}>Voltar</Link>
                </div>
            </div>
        </div>
    )
} 