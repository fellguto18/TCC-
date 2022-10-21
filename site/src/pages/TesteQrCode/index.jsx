import './index.scss'
import QRCode from "qrcode"
import { useEffect, useState } from 'react'


export default function AAA() {
    const [src, setSrc] = useState('');

    useEffect(() => {
        QRCode.toDataURL('Lara fedida precisa tomar banho').then((setSrc));
    }, []);

    return (
        <div className='aaaaa'>
            <div className='qrcode'>
                <img src={src} />
                <p>Aponte a camera do seu celular para o QRCode </p>
            </div>

        </div>)
}