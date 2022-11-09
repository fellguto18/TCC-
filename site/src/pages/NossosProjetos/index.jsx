import './index.scss'
import '../../common.scss'

import NavBarComp from '../../components/header';

import { listarProjeto } from '../../api/projetoApi'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NossosProjetos(){

    const [projetos, setProjetos] = useState([]);

    const navigate = useNavigate();

    async function carregarTodosProjetos() {
        const resp = await listarProjeto();
        setProjetos(resp);
    }

   function abrirDetalhes(id){
    navigate(`/projeto/${id}`);
   }

    useEffect(() => {
        carregarTodosProjetos();
    },[])


    return(
        <>
            <NavBarComp/>
            <main className='flex fd-column jc-center align-itens-center '>
                <div className='box flex fd-column jc-center align-itens-center'>
                    <div className='texto'>
                        <h3>Conheça nossos projetos:</h3>    
                    </div>   
                    <div className='card-container jc-center'>
                        {projetos.map(item => 
                            <div className='card' onClick={() => abrirDetalhes(item.id)}>
                                <div>
                                        <div className='sigla'>{item.nome.substr(0,1)}</div>
                                        <div className='projeto'>{item.nome} </div>
                                        
                                </div>
                            </div>
                        )}
                     </div>
                </div>
            </main>
        </>
    )
 }    
