import './index.scss'
import logo from '../../assets/images/logo.png'
import ftcriarconta from '../../assets/images/ftcriarconta.png'
import a from '../../assets/images/a.png'


export default function CriarConta(){
    return(
        <div className='page'>
<div>             <img className='logo' src={logo} /></div>
            <div className='aaaa'>
                <div className='informacoes'>
                    <h1>Voltar</h1>
                    <p>Nome Completo</p>
                    <input type="text" />
                    <p>CPF</p>
                    <input type="text" />
                    <p>E-mail</p>
                    <input type="text" />
                    <p>Senha</p>
                    <input type="text" />
                    <p>Confirme sua senha</p>
                    <input type="text" />
                    <button className='botaoCadastar'>Cadastrar</button>
                </div>
                <div className='inf-img'>
                        <img src={ftcriarconta} />
                </div>
             </div>
        </div>
)
}
