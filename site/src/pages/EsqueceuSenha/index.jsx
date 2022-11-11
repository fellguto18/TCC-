import './esqueceusenha.scss';
import logo from '../../assets/images/logo.png'


import React from 'react';
import { Link ,useNavigate } from 'react-router-dom';
import storage from 'local-storage';
import { useRef } from 'react';



export default function EsqueceuSenha(){

    const navigate = useNavigate();
     const ref = useRef();
    function voltarClick(){
        storage.remove('usuario-logado');
        navigate('/usuario/cadastrar');
    }
    return(
        <div className='page-esqueceusenha'>
            <div className='logo-1'>
                <img src={logo} />
            </div>
            <div className='aaa'>
                <h1>Esqueci a senha</h1>
                <p>Para redefinir sua senha, nos informe seu e-mail já cadastrado no site.</p>

                <h4>Email</h4>
                <input className='texto' type="text"  />

                <div className='div-botao'>
                    <Link to=''className='botao-2'> Próximo</Link>
                    <Link to=''className='botao-1' onClick={voltarClick}>Voltar</Link>
                </div>
            </div>
        </div>
    )
} 