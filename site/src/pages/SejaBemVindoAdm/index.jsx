import './style.scss'
import '../../common.scss'
import storage from 'local-storage';

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Index(){

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
                            <div className='bem-vindo-adm'>
                                <h1 data-aos='fade-down'>Seja bem vindo administrador!</h1>
                            </div>
                    </div>
             </div> 
           </main>
        </>
    )
}