//estilos
import './index.scss'
import '../../common/common.scss'
 


export default function MenuAdmin(){
    return(
        <>
          <div className="component-adm">
               <aside className="side-menu">
                       <img src="/assets/images/logo.svg" alt="Logo do site" className='logo' />
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