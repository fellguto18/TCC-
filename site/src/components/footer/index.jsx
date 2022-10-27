import './index.scss'
import '../../common.scss'

import { Link } from 'react-router-dom'

export default function Footer(){
    return(
        <>
            <footer className='footer'>
                <div className='flex align-itens-end jc-center'>
                    <p className='text'>Entre em contato conosco</p>
                    <div className='flex footer-contact'>
                        <img src="/assets/images/whatsapplogo.svg" alt="" className='icon' />
                        <img src="/assets/images/mailLogo.svg" alt="" className='icon'/>
                        <img src="/assets/images/instagramlogo.svg" alt="" className='icon'/>
                    </div>
                </div>

                <div className='end-footer flex jc-space-between align-itens-end'>
                    <Link to='/'> <img src="/assets/images/logo.svg" alt="" /> </Link> 
                    <div className='flex font-size-0-7em'>
                        <p className='text'>POLÍTICA DE PRIVACIDADE</p>
                        <p className='margin-l-1em text'>@2022 Commercie Company</p>
                    </div>
                    <div>
                        <Link to='/usuario/cadastrar'> <span className='text'>Cadastre-se</span></Link>
                    </div>
                </div>
            </footer>
        </>
    )
}