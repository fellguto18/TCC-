import '../../common.scss'
import './index.scss';

import { buscarImagem } from '../../api/projetoApi';

export default function DetalheProjeto(props) {
    return (
        <div className='comp-detalhe'>
            <img src={buscarImagem(props.projeto.imagem)} alt='' />
            <div className='box-info'>
                <h1>{props.projeto.nome}</h1>
                <div className='info'>
                    <p className='sinopse'> {props.projeto.descricao}</p>
                </div>
                <div>
                    <button className='botao'>Faça a sua contribuição</button>
                </div>
            </div>
            
        </div>
    )
}