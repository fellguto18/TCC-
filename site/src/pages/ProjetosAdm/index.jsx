import './style.scss'
import '../../common.scss'
import storage from 'local-storage';

import { useState } from 'react';
import { listarProjeto } from '../../api/projetoApi';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Index(){

    const navigate = useNavigate();

    const [projetos, setProjetos] = useState([]);

    async function carregarTodosProjetos() {
        const resp = await listarProjeto();
        setProjetos(resp);
    }

    function sairClick(){
        storage.remove('adm-logado');
        navigate('/admin/login');
    }

    useEffect(() => {
        if(!storage('adm-logado')){
            navigate('/admin/login');
        }
    },[]) 

    useEffect(() => {
        carregarTodosProjetos();
    },[])

    return(
        <>
            <main>
            <div className="component-adm">
                    <aside className="side-menu">
                            <div>
                            <img src="/assets/images/logo.svg" alt="Logo do site" className='logo' />
                            </div>
                            <div className='side-menu-links'>
                                    <p className='fff'>Projetos</p>
                                    <p className='fff'>Doadores</p>
                                    <p className='fff'>Estatísticas</p>
                                    <p onClick={sairClick} className='fff pointer'>Sair</p>
                            </div>
                    </aside>
                    <div className='menuzao'>
                            <div className="menu flex"> 
                                <p> Projetos Criados</p>                        
                                <div className='line-adm'></div>
                                <Link to='/admin/cadastrar'><p> Criar Projeto</p> </Link>
                            </div>

                            <div>

                            <div className='card-container-adm'>

                            {projetos.map(item => 

                                    <div className='comp-card-adm'>
                                        <div className='card-adm'>
                                            <div className='acoes'>

                                                <img src='/assets/images/icon-editar.svg' alt='editar' />
                                                
                                                <img src='/assets/images/icon-remover.svg' alt='remover' />
                                                
                                            </div>
                                            <div>
                                                <div className='sigla-adm'>{item.nome.substr(0,1)}</div>
                                                <div className='projeto-adm'>{item.nome} </div>
                                                <div className='lancamento'>Maio/2002</div>
                                            </div>
                                        </div>
                                     </div>
                            )}

                            </div>
                            
                          </div>
                            
                    </div>
             </div> 
           </main>
        </>
    )
}