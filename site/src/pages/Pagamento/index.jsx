import { useState } from 'react'

import './index.scss'
import { Link, useNavigate } from 'react-router-dom';

import {realizarDoacao} from '../../api/usuarioApi.js';
import { toast } from 'react-toastify';

import a from '../../assets/images/a.png';


export default function Pagamento(){
    const[nome, setNome] = useState();
    const[cpf, setCpf] = useState();
    const[email, setEmail] = useState();
    const[valor, setValor] = useState();
    const[data, setData] = useState();
    const navigate= useNavigate();


    async function Click(){
        try{
            const r = await realizarDoacao(nome, cpf, email, valor, data);
            if(!nome){
                throw new Error('Nome é obrigatório!')
            }
            if(!email){
                throw new Error('Email é obrigatório!')
            }
            if(!cpf){
                throw new Error('CPF é obrigatório!')
            }
            if(!valor){
                throw new Error('Selecione um valor!')
            }
            if(!data){
                throw new Error('Data é obrigatória!')
            }
            
        }catch(err){
           toast(err.response.data)
        }
    }

    function Voltar(){
        navigate('/')
    }

    return(
        <main className='page_pagamento'>
            <div className='pp_fundo'>
                <div>
                    <div className='botao_voltar'>
                            <img src={a} onClick={Voltar}/>
                            <p onClick={Voltar}>Voltar</p>  
                    </div>
                    <div className='card_input'>
                        <label>Nome</label>
                        <input type='text' value={nome} onChange={e => setNome(e.target.value)}></input>
                    </div>

                    <div className='card_input'>
                        <label>CPF</label>
                        <input type='text' value={cpf} onChange={e => setCpf(e.target.value)}></input>
                    </div>

                    <div className='card_input'>
                        <label>Email</label>
                        <input type='email' value={email} onChange={e => setEmail(e.target.value)}></input>
                    </div>
                    <div className='card_input'>
                        <label>Data</label>
                        <input type='date' value={data} onChange={e => setData(e.target.value)}></input>
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
                    

                <Link to='/doacao/realizada'onClick={Click}>Pagar</Link>
                
                
            </div>
        </main>
    )
}