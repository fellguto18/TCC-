import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuAdmin from '../components/menuAdmin';
import CadastroAdm from '../pages/CadastartAdm';
import CriarConta from '../pages/CriarConta';



export default function Rotas(){
return(
        <BrowserRouter>
            <Routes>
                <Route path="/admin/login" element={<CadastroAdm />}/>
                <Route path="/admin/menu" element={<MenuAdmin/>} />
            </Routes>
        </BrowserRouter>
)
}