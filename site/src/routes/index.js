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
import SobreNos from '../pages/SobreNos';
import NossosProjetos from '../pages/NossosProjetos';
import DoacaoRealizada from '../pages/ConfirmacaoDoacao';
import Grafico from '../pages/Grafico';
import SenhaAltSucesso from '../pages/SenhaSucesso';
import MenuAdmin from '../components/menuAdmin'


//teste
import Footer from '../components/footer';
import DetalhesProjeto from '../pages/DetalhesProjeto';

export default function Rotas(){
return(
    <BrowserRouter>
        <Routes>
            <Route path='/' element = {<LandingPage />} />
            <Route path="/admin/login"  element={<CadastroAdm/>}/>
            <Route path="/admin/cadastrar"  element={<CadastrarProjeto/>} />
            <Route path="/admin/doadores" element={<PesquisarDoadores/>}/>
            <Route path="/usuario/cadastrar"  element={<CriarConta/>} />
            <Route path='/cadastro/agradecimento' element={<CadastroOk/>}/>
            <Route path="/usuario/login" element={<LoginUsuario/>} />
            <Route path='/esqueceu/senha' element={<EsqueceuSenha/>} />
            <Route path='/nova/senha' element={<NovaSenha/>}/>
            <Route path='/sobreNos' element={<SobreNos/>}/>
            <Route path='/nossosprojetos'  element={<NossosProjetos/>}/>
            <Route path='projeto/:idParam' element={<DetalhesProjeto/>}/>
            <Route path='/teste'  element={<AAA/>}/>
            <Route path='/doacao/realizada' element={<DoacaoRealizada/>}/>
            <Route path='/grafico' element={<Grafico/>}/>
            


            <Route path='/senha/sucesso' element={<SenhaAltSucesso/>}/>

            <Route path='/footer' element={<Footer/>} />
        </Routes>
    </BrowserRouter>
)
}