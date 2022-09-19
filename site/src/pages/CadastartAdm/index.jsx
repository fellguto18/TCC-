import './index.scss'
import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'  
function CadastroAdm(){    
     return(
     <div className='a' style={{ backgroundImage: `url(${fundo})` }}>
          <img className='logo' src={logo} />
          <div className='cadastrar-adm' >                         
               <div className='login'>             
                    <h1 className='bem-vindo'>Seja bem-vindo!</h1>     
                    <div className='email'>       
                         <p>Email</p>             
                         <input  className='email' type="text" />             
                    </div>
                    <div className='senha'>  
                         <p>Senha</p>             
                         <input className='senha' type="text" />             
                    </div>    
                    
                    <div className='esqueceu-senha'><a>Esqueceu senha?</a> </div>
                    <div className='botoes'>
                         <div>
                              <button className='bt-entrar'>Entrar</button>
                         </div>
                         <div>
                              <h2 className='cadastrar'>Não tem uma conta? <a className='cadastre-se' >Cadastre-se</a> </h2>
                         </div>
                         <a className='voltar'>Voltar</a>    
                    </div>   
             </div>       
        </div>    
     </div>  
) } 

export default CadastroAdm;