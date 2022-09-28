import storage from 'local-storage';
import { useState } from "react";

//estilos
import './index.scss'
import { toast } from 'react-toastify';

import { cadastrarProjeto, enviarImagemProjeto } from "../../api/projetoApi";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function CadastrarProjeto(){

    useEffect(() => {
        if(!storage('usuario-logado')){
            navigate('/admin/login');
        }
    },[])    

    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [meta, setMeta] = useState('');
    const [imagem, setImagem] = useState();

    async function salvarClick(){
        try {
          const usuario = storage('usuario-logado').id;  
          const r = await cadastrarProjeto(nome, descricao, Number(meta), usuario);

          toast('🚀 Projeto cadastrado com sucesso')
        } catch (err) {
          toast.error(err.response.data.erro);
        }
    }

    function sairClick(){
        storage.remove('usuario-logado');
        navigate('/admin/login');
    }

    function escolherImagem() {
        document.getElementById('imagemCapa').click();
    }

    function mostrarImagem(){
        return URL.createObjectURL(imagem);
    }

    return(

           <>
           <div className="component-adm">
               <aside className="side-menu">
                       <div>
                       <img src="/assets/images/logo.svg" alt="Logo do site" className='logo' />
                       </div>
                       <div className='side-menu-links'>
                             <p>Projetos</p>
                             <p>Doadores</p>
                             <p>Estatísticas</p>
                             <p onClick={sairClick}>Sair</p>
                       </div>
               </aside>
               <div className='menuzao'>
                    <div className="menu"> <p> Projetos Criados |</p> <p> Criar Projeto</p></div>

                    <div className="box-input">
                       <p>Nome do Projeto</p>
                       <input type="text" className="input" value={nome} onChange={e => setNome(e.target.value)}/>
                    </div>
                    <div className="box-input">
                        <p>Descrição</p>
                        <input type="text" className="input"  value={descricao} onChange={e => setDescricao(e.target.value)} />
                    </div>
                    <div className="box-input">
                        <p>Objetivos do projeto</p>
                        <input type="number" className="input"  value={meta} onChange={e => setMeta(e.target.value)}/>
                    </div>
               </div>
               <div>
                    <div className="box-img" onClick={escolherImagem}>
                        {!imagem &&
                            <img src="/assets/images/download.svg" alt="Logo de download" className="img-download" />
                        }
                        {imagem &&
                            <img className='imagem-projeto' src={mostrarImagem()} alt="" />
                        }
                        <input type="file" id='imagemProjeto' onChange={e => setImagem(e.target.files[0])} />
                    </div>
               </div>
               <div className="box-button">
                <button onClick={salvarClick} className="button">Publicar</button>
               </div>
                
          </div>
           </>
    )
}