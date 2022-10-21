import './index.scss';
import confirmar from '../../assets/images/confirmarDoacao.png'

import storage from 'local-storage';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function DoacaoRealizada(){
    
    const navigate = useNavigate();


    function sairClick(){
        storage.remove('usuario-logado');
        navigate('/');
    }
    return(
        <div className='doacao'>
            <div className='ii'>
                <img className='img' src={confirmar} />
                <h1>Muito obrigado pela sua doação!</h1>
                <h3>O que se compartinha, multiplica-se no futuro</h3>
                <button onClick={sairClick}>Voltar à página</button>
            </div>
            
        </div>
    )
}