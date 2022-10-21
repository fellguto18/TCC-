import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CadastrarProjeto from '../pages/CadastrarProjeto';
import CadastroAdm from '../pages/CadastartAdm';
import CriarConta from '../pages/CriarConta';
import PesquisarDoadores from '../pages/PesquisarDoadores';
import LandingPage from '../pages/LandingPage';
import LoginUsuario from '../pages/LoginUsuario';
import CadastroOk from '../pages/CadastroRealizado';
import EsqueceuSenha from '../pages/EsqueceuSenha';
import NovaSenha from '../pages/NovaSenha';
import AAA from '../pages/TesteQrCode';
<<<<<<< HEAD
import SobreNos from '../pages/SobreNos';
=======
import DoacaoRealizada from '../pages/ConfirmacaoDoacao';
import Grafico from '../pages/Grafico';

>>>>>>> 07eb620e10eb53e54a48cb7c2929d58354be28f2

export default function Rotas(){
return(
    <BrowserRouter>
        <Routes>
            <Route path='/' element = {<LandingPage />} />
            <Route path="/admin/login"  element={<CadastroAdm/>}/>
            <Route path="/admin/menu"  element={<CadastrarProjeto/>} />
            <Route path="/admin/doadores" element={<PesquisarDoadores/>}/>
            <Route path="/usuario/cadastrar"  element={<CriarConta/>} />
            <Route path='/cadastro/agradecimento' element={<CadastroOk/>}/>
            <Route path="/usuario/login" element={<LoginUsuario/>} />
            <Route path='/esqueceu/senha' element={<EsqueceuSenha/>} />
            <Route path='/nova/senha' element={<NovaSenha/>}/>
            <Route path='/sobreNos' element={<SobreNos/>}/>

            <Route texto="Chaves Gastas" path='/teste'  element={<AAA/>}/>
            <Route path='/doacao/realizada' element={<DoacaoRealizada/>}/>
            <Route path='/grafico' element={<Grafico/>}/>
        </Routes>
    </BrowserRouter>
)
}