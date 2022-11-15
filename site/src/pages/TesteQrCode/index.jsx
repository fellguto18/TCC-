import './index.scss'
import QRCode from "qrcode"
import { useEffect, useState } from 'react'


export default function AAA(projetoId, nome, cpf, email, valor, dia) {
    const [src, setSrc] = useState('');

    useEffect(() => {
    QRCode.toDataURL(`http://localhost:3000/projeto/pagamentorealizado?projeto=${projetoId}&qrcode?nome=${nome}&cpf=${cpf}&email=${email}&data=${dia}&valor=${valor}`).then((setSrc));
    }, []);

    return (
        <div className='aaaaa'>
            <div className='qrcode'>
                <img src={src} />
                <p>Aponte a camera do seu celular para o QRCode </p>
            </div>
        </div>)
}