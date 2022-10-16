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
        <img src={src} />
    </div>)
}