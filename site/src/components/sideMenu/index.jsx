import './index.scss'
import '../../common.scss'

export default function SideMenu(){
    return(
        <>
        <main className='page'>
            <aside className='asideMenu'>
                <div>
                    <img src="/assets/images/logo.svg" alt="Logo do site" className='logo' />
                </div>
                <div className='side-menu-links'>
                    <p>Projetos</p>
                    <p>Doadores</p>
                    <p>Estatísticas</p>
                    <p>Sair</p>
                </div>
            </aside>
        </main>   
        </>
    )
}