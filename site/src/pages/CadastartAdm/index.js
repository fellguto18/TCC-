import { login } from '../../api/adminApi'
import{  useNavigate  }from 'react-router-dom'

import storage from 'local-storage'
import LoadingBar from 'react-top-loading-bar'
import { useState, useRef, useEffect} from 'react'

import './index.scss'
import logo from '../../assets/images/logo.png'

 
function CadastroAdm(){ 
     const[email, setEmail] = useState('');
     const[senha, setSenha] = useState('');
     const [erro, setErro] = useState('');
     const [carregando, setCarregando] = useState(false);

     const navigate = useNavigate();
     const ref = useRef();

     useEffect(() => {
          if(storage('usuario-logado')) {
               navigate('/admin/menu');
          }
     }, [])
     
     async function entrarClick(){
          ref.current.continuousStart();
          setCarregando(true);    

          try {
          const r = await login(email, senha);
          storage('usuario-logado', r)
         

          setTimeout(() => {
               navigate('/admin/menu');
          }, 3000);


          }catch (err){
               ref.current.complete();
               setCarregando(false);

               if(err.response.status === 401){
                    setErro(err.response.data.erro);
               }
          }
     }
        
     return(
     <div className='a' >
          <LoadingBar color='#000' ref={ref} />

          <img className='logo' src={logo} />
          <div className='cadastrar-adm' >                         
               <div className='login'>             
                    <h1 className='bem-vindo'>Seja bem-vindo!</h1> 
                    <div className='cx-login'>   
                         <p className='emai'>Email</p>             
                         <input className='tx-email' type="text" value={email} onChange={e => setEmail(e.target.value)} />             
                    <div/>
                    <div/> 
                         <p>Senha</p>             
                         <input className='tx-senha'  type="password" value={senha} onChange={e => setSenha(e.target.value)}/>             
                         
                    </div>   
                    <br />
                    <div className='esqueceu-senha'><a>Esqueceu senha?</a> </div>
                    <div className='erro'>{erro}</div>
                    <br />
                    <div className='botoes'>
                         <div>
                              <button className='bt-entrar' onClick={entrarClick} disabled={carregando}> <a >Entrar</a> </button>
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