import './criarconta.scss'
import logo from '../../assets/images/logo.png'
import ftcriarconta from '../../assets/images/ftcriarconta.png'

import { useState } from 'react'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import storage from 'local-storage';
import { useEffect } from 'react';
import { useRef } from 'react';
import { toast } from 'react-toastify';

import { cadastrarUsuario } from '../../api/usuarioApi';



export default function CriarConta() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmar, setConfirmar] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  const navigate = useNavigate();
  const ref = useRef();

  async function entrarClick() {
    try {
      const userLogged = storage('usuario-cadastrar');
      const r = await cadastrarUsuario(nome, cpf, email, senha, confirmar);
      function validarMesmaSenha(confsenha, senha) {
        console.log("Valores: " + senha + " " + confsenha);
        if (senha === confsenha) return { valido: true, texto: "" };
        else return { valido: false, texto: "Senha não confere!" };
      }
      toast(`🚀 cadastrado com sucesso!`)
    } catch (err) {
      toast.error(err.response.data.erro);
    }
  }

  function voltarClick() {
    storage.remove('usuario-logado');
    navigate('/');
  }


  return (
    <div className='e'>
      <div className='logo'> <img src={logo} /></div>
      <div className='b'>
        <div className='aaaa'>
          <div className='informacoes'>
            <button className='utton' onClick={voltarClick}>Voltar</button>
            <p>Nome Completo</p>
            <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
            <p>CPF</p>
            <input type="text" value={cpf} onChange={e => setCpf(e.target.value)} />
            <p>E-mail</p>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
            <p>Senha</p>
            <input type="password" value={senha} onChange={e => setSenha(e.target.value)} />
            <button className='botaoCadastar' onClick={entrarClick}  >  Cadastrar</button>
          </div>
          <div className='inf-img'>
            <img src={ftcriarconta} />
          </div>
        </div>
      </div>
    </div>
  )
}
