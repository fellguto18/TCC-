import './index.scss'

import { useEffect } from "react";
import { useState } from "react";
import lupa from "../../assets/images/lupa_1.png";
import { listarTodosDoadores, pesquisarDoador } from "../../api/adminApi.js";

export default function Index(){
    const [doador, setDoador] = useState([]);
    const [filtro, setFiltro] = useState('');

    async function filtrar(){
        const resp = await pesquisarDoador(filtro);
        setFiltro(resp);
    }
    
    async function carregarTodosDoadores(){
        const resp = await listarTodosDoadores();
        setDoador(resp);
    }
    
    useEffect(() => {
        carregarTodosDoadores();
    }, [])


    return (
        <div className="page">
            <aside className="side-menu">
                <div>
                    <div>
                        <img src="/assets/images/logo.svg" alt="Logo do site" className='logo' />
                    </div>
                    <div>
                        <p className='links'>Projetos</p>
                        <p className='links'>Doadores</p>
                        <p className='links'>Estatísticas</p>
                        <p className='links'>Sair</p>
                    </div>
                </div>
                    <div>
                        <div className='buscar'>
                            <img className="lupa" src={lupa} alt='buscar' onClick={filtrar}/>
                            <input type="text" placeholder="Buscar Doador" valaue={filtro} onChange={e => setFiltro(e.target.value)}/>
                        </div>
                    
                    <div>
                        {doador.map(item =>     
                            <div className='card_doador'>
                                <p className="Nome">{item.doador}</p>
                                <p className="info_doador">{item.projeto} | R${item.valor},00 | {item.data.substr(0, 10)}</p>    
                            </div>   
                        )} 
                    </div>
                </div>
            </aside>
        
        </div>
    )
}