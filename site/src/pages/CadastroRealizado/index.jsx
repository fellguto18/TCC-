import './index.scss'
import logo from '../../assets/images/logo.png'

import { useNavigate } from 'react-router-dom';
import storage from 'local-storage';





export default function CadastroOk(){


    const navigate = useNavigate();
    

    function voltarClick(){
        storage.remove('usuario-logado');
        navigate('/');
    }
     
    return(
       <div className="page">
            <div className='logo'> <img src={logo} /></div>
            <div className="centro">
                <h1>Conta criada com sucesso!</h1>
                <h3>Muito obrigado por se registrar em nosso site.</h3>
                <button onClick={voltarClick}>Voltar à Página Inicial</button>
            </div>
       </div> 
    )
}