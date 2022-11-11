import './index.scss'
import '../../common.scss'

import { Link } from "react-router-dom";

export default function NavBarComp(){
    return(
        <>
            <header className='navbar align-itens-center'>

                <Link to='/'>
                    <img src="/assets/images/logo.svg" alt="Logo do site" className='logo' />
                </Link>

                <ul className='list'>
                    <li className='item'> <Link to='/sobreNos'>Sobre nós</Link></li>
                        <div className='line'></div>
                    <li className='item'> <Link to='/nossosprojetos'>Nossos projetos</Link></li>
                        <div className='line'></div>
                    <li className='item'> <Link to='/usuario/login'>Login</Link></li>
                </ul>
            </header>
        </>
    )
}