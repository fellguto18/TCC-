import './index.scss'

export default function NovaSenha(){
    return(
        <div className='page'>
            <div className='nv-senha'>
                <h1>Esqueci a senha </h1>
                <h3>Seu senha deve conter de 8 a 10 caracteres.</h3>
                <h4>Nova senha</h4>
                <input type="text" className='texto' />
                <h4>Confimre a senha</h4>
                <input type="password" className='senha'/>

                <button className='proximo'>Próximo</button>
                <button>Cancelar </button>
                <button>Voltar</button>
            </div>
        </div>
    )
}

