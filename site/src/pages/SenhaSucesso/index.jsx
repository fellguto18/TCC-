import './index.scss';


export default function SenhaAltSucesso(){
    return(
        <div className='page'>
            <div className='centro'>
                <h1 className='b'>Sua senha foi alterada com sucesso!</h1>
                 
                <h3>Não se esqueça de anota-lá em algum lugar!</h3>
                <h3>Aqui está o que você acabou de alterar:</h3>
                <h2>Sua senha</h2>

                <button >Fazer login</button>
            </div>
        </div>
    )
}