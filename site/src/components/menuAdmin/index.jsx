//estilos
import './index.scss'
import '../../common.scss'
 


export default function MenuAdmin(){
    return(
        <>
          <div className="component-adm">
               <aside className="side-menu">
                       <div>
                       <img src="/assets/images/logo.svg" alt="Logo do site" className='logo' />
                       </div>
                       <div className='side-menu-links'>
                             <p>Projetos</p>
                             <p>Doadores</p>
                             <p>Estatísticas</p>
                       </div>
               </aside>
          </div>
        </>
    )
}