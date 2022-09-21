import './index.scss'
import logo from '../../assets/images/logo.png'

 
function CadastroAdm(){    
     return(
     <div className='a' >
          <img className='logo' src={logo} />
          <div className='cadastrar-adm' >                         
               <div className='login'>             
                    <h1 className='bem-vindo'>Seja bem-vindo!</h1> 
                    <div className='cx-login'>   
                         <p>Email</p>             
                         <input className='tx-email' type="text" />             
                    <div/>
                    <div/> 
                         <p>Senha</p>             
                         <input className='tx-senha'  type="text" />             
                         
                    </div>   
                    <br />
                    <div className='esqueceu-senha'><a>Esqueceu senha?</a> </div>
                    <br />
                    <div className='botoes'>
                         <div>
                              <button className='bt-entrar'> <a >Entrar</a> </button>
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