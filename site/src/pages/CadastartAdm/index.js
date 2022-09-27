import axios from  'axios'
import{  useNavigate  }from 'react-router-dom'
import { useState } from 'react'

import './index.scss'
import logo from '../../assets/images/logo.png'

 
function CadastroAdm(){ 
     const[email, setEmail] = useState('');
     const[senha, setSenha] = useState('');
     const [erro, setErro] = useState('');

     const navigate = useNavigate();
     
     async function entrarClick(){
     try{
          const r = await axios.post('http://localhost:5000/admin/login', {
               email:email,
               senha:senha
          })
          if (r.status === 401){
               setErro(r.data.erro);
          }
          else{
               navigate('/admin/menu')
          }
     }catch (err){
          if(err.response.status === 401){
               setErro(err.response.data.erro);
          }
     }
     }
        
     return(
     <div className='a' >
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
                              <button className='bt-entrar' onClick={entrarClick}> <a >Entrar</a> </button>
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