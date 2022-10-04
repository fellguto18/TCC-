import { useEffect } from "react";
import { useState } from "react";
import { listarTodosDoadores, pesquisarDoador } from "../../api/adminApi.js";
import MenuAdmin from "../../components/menuAdmin/index.jsx";

import './index.scss'


import lupa from "../../assets/images/lupa_1.png";

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
                    <img src="/assets/images/logo.svg" alt="Logo do site" className='logo' />
                </div>
                <div className='side-menu-links'>
                    <p>Projetos</p>
                    <p>Doadores</p>
                    <p>Estatísticas</p>
                    <p>Sair</p>
                </div>
            </aside>
            <div>
                <input type="text" placeholder="Buscar Doador" valaue={filtro} onChange={e => setFiltro(e.target.value)}/>
                <img className="lupa" src={lupa} onClick={filtrar}/>
            </div>
        
        {doador.map(item =>     
        <div>
            <p className="Nome">{item.nome}</p>
            <p className="info_doador">{item.projeto} | {item.valor} | {item.data}</p>    
        </div>   
        )} 
        </div>
    )
}