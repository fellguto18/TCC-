import '../../common.scss'
import './index.scss';

import { buscarImagem } from '../../api/projetoApi';

export default function DetalheProjeto(props) {
    return (
        <div className='comp-detalhe flex fd-column'>
            <div className='flex'>
            <img src={buscarImagem(props.projeto.imagem)} alt='img' data-aos='fade-right' />
            <div className='box-info flex fd-column'>
                <h1>{props.projeto.nome}</h1>
                <div className='info'>
                    <p className='sinopse'> {props.projeto.descricao}</p>
                </div>
            </div>
            </div> 
        </div>
    )
}