import './index.scss'
import logo from '../../assets/images/logo.png'
import ftcriarconta from '../../assets/images/ftcriarconta.png'



export default function CriarConta(){
    return(
        <div className=''>
                <div className='logo'> <img src={logo} /></div>
            <div className='b'>
                <div className='aaaa'>
                    <div className='informacoes'>
                        <button className='utton'>Voltar</button>
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
                        <button className='tton'>Cadastrar</button>
                    </div>
                    <div className='inf-img'>
                            <img src={ftcriarconta} />
                    </div>
                </div>
            </div>
        </div>
)
}
