import './index.scss';
import logo from '../../assets/images/logo.png'


import React from 'react';
import { useNavigate } from 'react-router-dom';
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
        <div className='page'>
            <div className='logo'> <img src={logo} /></div>
            <div>
                <h1>Esqueci a senha</h1>
                <p>Para redefinir sua senha, nos informe seu e-mail já cadastrado no site.</p>

                <h4>Email</h4>
                <input type="text" className='cx' />

                <button>Próximo</button>
                <button className='utton' onClick={voltarClick}>Voltar</button>

            </div>
        </div>
    )
} 