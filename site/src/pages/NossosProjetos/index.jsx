import './index.scss'
import '../../common.scss'

import NavBarComp from '../../components/header';

import { listarProjeto } from '../../api/projetoApi'
import { useState } from 'react';
import { useEffect } from 'react';

export default function NossosProjetos(){

    const [projetos, setProjetos] = useState([]);


    async function carregarTodosProjetos() {
        const resp = await listarProjeto();
        setProjetos(resp);
    }

    useEffect(() => {
        carregarTodosProjetos();
    },[])


    return(
        <>
            <NavBarComp/>
            <main className='flex fd-column NossosProjetos-page'>
                
                <div className='box flex column jc-center align-itens-center'>
               
                    <div className='card-container'>
                        {projetos.map(item => 
                            <div className='card'>
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