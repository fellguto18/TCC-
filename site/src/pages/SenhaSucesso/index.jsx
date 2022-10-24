import './index.scss';

import{  useNavigate,Link  }from 'react-router-dom'


export default function SenhaAltSucesso(){
    return(
        <div className='page'>
            <div className='centro'>
                <h1 className='b'>Sua senha foi alterada com sucesso!</h1>
                 
                <h3>Não se esqueça de anota-lá em algum lugar!</h3>
                <h3>Aqui está o que você acabou de alterar:</h3>
                <h2>Sua senha</h2>

                <button> <Link to='/'>Fazer login </Link> </button>
            </div>
        </div>
    )
}