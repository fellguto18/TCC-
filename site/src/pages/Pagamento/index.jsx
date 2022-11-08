import { useEffect } from 'react';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './index.scss'

import {realizarDoacao} from '../../api/usuarioApi.js';
import { toast } from 'react-toastify';



export default function Pagamento(usuario){
    const[nome, setNome] = useState();
    const[cpf, setCpf] = useState();
    const[email, setEmail] = useState();
    const[valor, setValor] = useState();
    const navigate= useNavigate();


    async function Click(){
        try{
            const r = await realizarDoacao(usuario, valor);
            if(usuario.nome == undefined)
                throw new Error('Nome é obrigatório!')
            if(!usuario.email == undefined)
                throw new Error('Email é obrigatório!')
            if(usuario.cpf == undefined)
                throw new Error('CPF é obrigatório!')
            if(valor == undefined)
                throw new Error('Selecione um valor!')
            navigate('/teste')
            toast('🚀  Doação efetuada com sucesso!')
        }catch(err){
           toast(err.response.data.erro)
        }
    }

    return(
        <main className='page_pagamento'>
            <div className='pp_fundo'>
                <div>
                    <div className='card_input'>
                        <label>Nome</label>
                        <input type='text' value={nome} onChange={e => setNome(e.target.value)}></input>
                    </div>

                    <div className='card_input'>
                        <label>CPF</label>
                        <input type='text' value={cpf} onChange={e => setCpf(e.target.value)} placeholder='ex.: 000.000.000-00'></input>
                    </div>

                    <div className='card_input'>
                    
                        <label>Email</label>
                        <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='ex.: maria@gmail.com'></input>
                    </div>
                    <div className='fx_seletor'>
                        <select className='seletor' value={valor} onChange={e => setValor(e.target.value)}>
                            <option>R$ 10,00</option>
                            <option>R$ 20,00</option>
                            <option>R$ 50,00</option>
                            <option>R$ 100,00</option>
                        </select>
                        <p>Valor selecionado: {valor}</p>
                    </div>

                </div>
                    

                <button onClick={Click}>Gerar QRCode</button>
                
                
            </div>
        </main>
    )
}