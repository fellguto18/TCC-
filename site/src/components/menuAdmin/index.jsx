//estilos
import './index.scss'
import '../../common.scss'
 


export default function MenuAdmin(){
return(
  <div className="component-adm">
    <div>
      <img src="/assets/images/logo.svg" alt="Logo do site" className='logo' />
    </div>
    <aside>
      <div className='side-menu-links'>
        <p>Projetos</p>
        <p>Doadores</p>
        <p>Estatísticas</p>
        <p>Sair</p>
      </div>
    </aside>
  </div>
)}