import storage from 'local-storage';
import { useState } from "react";


//estilos
import './index.scss'
import '../../common.scss'

//componentes
import { toast } from 'react-toastify';

import { buscarImagem, cadastrarProjeto, enviarImagemProjeto, alterarProjeto, listarProjetoPorID } from "../../api/projetoApi";
import { useNavigate, Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function CadastrarProjeto(){

    useEffect(() => {
        if(!storage('adm-logado')){
            navigate('/admin/login');
        }
    },[])    

    const navigate = useNavigate();
    const { idParam } = useParams();

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [meta, setMeta] = useState('');
    const [imagem, setImagem] = useState();
    const [id, setId] = useState(0);

    useEffect(() => {
        if(idParam) {
            carregarProjeto();
        }
    }, [])

    async function carregarProjeto() {
        const resposta = await listarProjetoPorID(idParam);
        setNome(resposta.nome);
        setDescricao(resposta.descricao);
        setMeta(resposta.meta);
        setId(resposta.id);
        setImagem(resposta.imagem);
    }

    async function salvarClick(){
        try {
            if(!imagem)
               throw new Error('Escolha a imagem do projeto.');  

          const usuario = storage('adm-logado').id;
          
          if(id === 0) {
            const novoProjeto = await cadastrarProjeto(nome, descricao, Number(meta), usuario);
            await enviarImagemProjeto(novoProjeto.id, imagem);

            setId(novoProjeto.id)
            toast('🚀 Projeto cadastrado com sucesso!')
          }
          else{
            await alterarProjeto(id, nome, descricao, Number(meta), usuario);

            if (typeof(imagem) == 'object')
                await enviarImagemProjeto(id, imagem);
            toast('🚀 Projeto alterado com sucesso!')
          }

        } catch (err) {
           if(err.response)  
             toast.error(err.response.data.erro);
          else
             toast.error(err.message)  
        }
    }

    function sairClick(){
        storage.remove('adm-logado');
        navigate('/admin/login');
    }

    function escolherImagem() {
        document.getElementById('imagemProjeto').click();
    }

    function mostrarImagem(){
        if (typeof (imagem) == 'object') {
        return URL.createObjectURL(imagem);
        }
        else{
            return buscarImagem(imagem);
        }
    }

    function novoClick(){
        setId(0);
        setNome('');
        setDescricao('');
        setMeta('');
        setImagem();
    }

    return(

           <>
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
                    <div className="menu">  <Link to='/admin/projetos'><p  className='animation-hover-menu'> Projetos Criados</p> </Link> <div className='line-adm'></div> <Link to='/admin/cadastrar'><p  className='animation-hover-menu'> Criar Projeto</p> </Link></div>

                    <div className="box-input">
                       <p>Nome do Projeto</p>
                       <input type="text" className="input" data-aos='fade-up' value={nome} onChange={e => setNome(e.target.value)}/>
                    </div>
                    <div className="box-input">
                        <p>Descrição</p>
                        <input type="text" className="input" data-aos='fade-up'  value={descricao} onChange={e => setDescricao(e.target.value)} />
                    </div>
                    <div className="box-input">
                        <p>Objetivos do projeto</p>
                        <input type="number" className="input" data-aos='fade-up'  value={meta} onChange={e => setMeta(e.target.value)}/>
                    </div>
               </div>
               <div>
                    <div className="box-img pointer" onClick={escolherImagem}>
                        {!imagem &&
                            <img src="/assets/images/download.svg" alt="Logo de download" className="img-download" />
                        }
                        {imagem &&
                            <img className='imagem-projeto' src={mostrarImagem()} alt="" />
                        }
                        <input type='file' id='imagemProjeto' onChange={e => setImagem(e.target.files[0])} />
                    </div>
                    
               </div>
               <div className="flex box-button align-itens-end">
                <button onClick={salvarClick} className="button">{id === 0 ? 'Publicar' : 'Alterar'}</button>
                <button onClick={novoClick} className="button">Novo</button>
               </div>
                
          </div>
           </>
    )
}