import './style.scss'
import '../../common.scss'
import storage from 'local-storage';

import { listarProjetoPorID } from '../../api/projetoApi';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

//components
import DetalheProjeto from '../../components/detalhesProjeto';

export default function Index(){

    const navigate = useNavigate();

    const [projeto, setProjeto] = useState({});

    const { idParam } = useParams();


    useEffect(() => {
        if(!storage('adm-logado')){
            navigate('/admin/login');
        }
    },[]) 

    function sairClick(){
        storage.remove('adm-logado');
        navigate('/admin/login');
    }

    async function carregarProjeto(){
        const resposta = await listarProjetoPorID(idParam);
        setProjeto(resposta);
    }

    useEffect(() => {
        carregarProjeto();
    }, []);

    return(
        <>
            <main>
            <div className="component-adm">
                    <aside className="side-menu">
                            <div>
                            <img src="/assets/images/logo.svg" alt="Logo do site" className='logo' />
                            </div>
                            <div className='side-menu-links'>
                                    <Link to='/admin/projetos'><p className='fff'>Projetos</p> </Link>
                                    <Link to='/admin/doadores'><p className='fff'>Doadores</p> </Link>
                                    <Link to='/admin/grafico'><p className='fff'>Estatísticas</p> </Link>
                                    <p onClick={sairClick} className='fff pointer'>Sair</p>
                            </div>
                    </aside>
                    <div className='menuzao'>
                            <div className="menu flex"> 
                                <Link to='/admin/projetos'><p className='animation-hover-menu'> Projetos Criados</p> </Link>                        
                                <div className='line-adm'></div>
                                <Link to='/admin/cadastrar'><p className='animation-hover-menu'> Criar Projeto</p> </Link>
                            </div>
                           <div>
                                <DetalheProjeto projeto={projeto}/>
                           </div>
                    </div>
             </div> 
           </main>
        </>
    )
}