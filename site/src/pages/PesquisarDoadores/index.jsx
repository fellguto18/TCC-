import './index.scss'

import storage from 'local-storage';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
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

    const navigate = useNavigate();


    useEffect(() => {
        if(!storage('adm-logado')){
            navigate('/admin/login');
        }
    },[]) 

    function sairClick(){
        storage.remove('adm-logado');
        navigate('/admin/login');
    }



    return (
        <div className="page">
            <aside className="side-menu">
                <div>
                    <div>
                        <img src="/assets/images/logo.svg" alt="Logo do site" className='logo' />
                    </div>
                    <div>
                             <Link to='/admin/projetos'><p className='fff links'>Projetos</p> </Link>
                             <Link to='/admin/doadores'><p className='fff links'>Doadores</p> </Link>
                             <Link to='/admin/grafico'><p className='fff links'>Estatísticas</p> </Link>
                             <p onClick={sairClick} className='links pointer'>Sair</p>
                    </div>
                </div>
                    <div>
                        <div className='buscar'>
                            <img className="lupa" src={lupa} alt='buscar' onClick={filtrar}/>
                            <input className='input' type="text" placeholder="Buscar Doador" value={filtro} onChange={e => setFiltro(e.target.value)}/>
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