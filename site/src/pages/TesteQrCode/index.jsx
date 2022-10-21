import './index.scss'
import QRCode from "qrcode"
import {  useEffect,useState  } from 'react'


export default function AAA(){
const [src,setSrc] =useState('');
 
    useEffect(({texto})=>{
        QRCode.toDataURL(texto).then((setSrc));
    }, []);
    return(
    <div className='aaaaa'>
        <div>
            <img src={src} />
            <p>1. Abra o aplicativo Ame Digital em seu smartphone. Caso não o tenha instalado, baixe-o na Google Play ou App Store.
               2. Clique em pagar e aponte para o QR Code.
               3. Pronto, agora é só finalizar o pagamento com Ame.</p>
        </div>
        
    </div>)
}