import './style.scss'
import '../../common.scss'
import storage from 'local-storage';

import { toast } from 'react-toastify'
import { confirmAlert } from 'react-confirm-alert';
import { useState } from 'react';
import { listarProjeto, removerProjeto } from '../../api/projetoApi';
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

    async function removerProjetoClick(id, nome) {

        confirmAlert({
            title: 'Remover o projeto',
            message: `Deseja remover o projeto ${nome}?`,
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        const resposta = await removerProjeto(id, nome);
                        carregarTodosProjetos();
                        toast('Projeto removido🗑️')
                    }
                },
                {
                    label: 'Não'
                }
            ]
        })          
    }

    function editarProjeto(id){
        navigate(`/admin/alterar/${id}`)
    }

    function abrirDetalhes(id){
        navigate(`/projetoadm/${id}`);
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
                                    <Link to='/admin/projetos'><p className='fff'>Projetos</p> </Link>
                                    <p className='fff'>Doadores</p>
                                    <p className='fff'>Estatísticas</p>
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

                            <div className='card-container-adm'>

                            {projetos.map(item => 

                                    <div className='comp-card-adm' data-aos='fade-up' key={item.id} >
                                        <div className='card-adm'>
                                            <div className='acoes'>

                                                <img src='/assets/images/lixeira.svg' alt='remover' onClick={() => removerProjetoClick(item.id, item.nome)} />
                                                
                                                <img src='/assets/images/editar.svg' alt='editar' onClick={() => editarProjeto(item.id)}  />
                                                
                                            </div>
                                            <div>
                                                <div className='sigla-adm'  onClick={() => abrirDetalhes(item.id)}>{item.nome.substr(0,1)} </div>
                                                <div className='projeto-adm'>{item.nome} </div>
                                                <div className='meta'>{item.meta}</div>
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