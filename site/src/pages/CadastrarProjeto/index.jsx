import storage from 'local-storage';
import { useState } from "react";
import './index.scss'

import { cadastrarProjeto, enviarImagemProjeto } from "../../api/projetoApi";

export default function CadastrarProjeto(){

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [meta, setMeta] = useState('');
    const [imagem, setImagem] = useState('');

    async function salvarClick(){
        try {
          const usuario = storage('usuario-logado').id;  
          const r = await cadastrarProjeto(nome, descricao, meta, usuario);

          alert('Projeto cadastrado com sucesso')
        } catch (err) {
            alert(err.message);
        }
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
                       </div>
               </aside>
               <div>
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
                        <input type="text" className="input"  value={meta} onChange={e => setMeta(e.target.value)}/>
                    </div>
               </div>
               <div>
                    <div className="box-img">
                        <img src="/assets/images/download.svg" alt="Logo de download" className="img-download" />
                    </div>
               </div>
               <div className="box-button">
                <button onClick={salvarClick} className="button">Publicar</button>
               </div>
                
          </div>
           </>
    )
}