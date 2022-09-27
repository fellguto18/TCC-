import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CadastrarProjeto from '../pages/CadastrarProjeto';
import CadastroAdm from '../pages/CadastartAdm';
import CriarConta from '../pages/CriarConta';



export default function Rotas(){
return(
        <BrowserRouter>
            <Routes>
                <Route path="/admin/login" exact={true} element={<CadastroAdm/>}/>
                <Route path="/admin/menu" exact={true} element={<CadastrarProjeto/>} />
            </Routes>
        </BrowserRouter>
)
}