import './index.scss'
import QRCode from "qrcode"
import { useEffect, useState } from 'react'


export default function AAA(projetoId, usuario, valor, dia) {
    const [src, setSrc] = useState('');

    useEffect(() => {
    QRCode.toDataURL(`http://localhost:3000/projeto/pagamentorealizado?projeto=${projetoId}&qrcode?nome=${usuario.nome}&cpf=${usuario.cpf}&email=${usuario.email}&data=${dia}&valor=${valor}`).then((setSrc));
    }, []);

    return (
        <div className='aaaaa'>
            <div className='qrcode'>
                <img src={src} />
                <p>Aponte a camera do seu celular para o QRCode </p>
            </div>
        </div>)
}