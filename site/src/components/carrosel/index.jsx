import '../../common.scss'
import './index.scss'

import { useState , useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';

import { listarProjeto } from '../../api/projetoApi'
import { buscarImagem } from '../../api/projetoApi';


export default function Carousel(){
    const carousel = useRef();
    const [width, setWidth] = useState(0);
    const [projetos, setProjetos] = useState([]);

    const navigate = useNavigate();


    async function carregarTodosProjetos() {
        const resp = await listarProjeto();
        setProjetos(resp);
    }

    function abrirDetalhes(id){
        navigate(`/projeto/${id}`);
       }

    useEffect(() => {
        carregarTodosProjetos();
    },[])


    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])

    return(
        <>
        <div className='App'>
           <motion.div ref={carousel} className='carousel' whileTap={{ cursor : "grabbing"}}>
                <motion.div className='inner' drag="x" dragConstraints={{ right: 0, left: -width}} initial={{ x: 100}} animate={{ x: 0}} transition={{ duration: 0.8}}>

                    {projetos.map(item => (
                        <div className='flex fd-column align-itens-center'>
                            <motion.div className='image' key={item}>
                                <p>{item.nome}</p>
                                <img src={buscarImagem(item.imagem)} alt="imagem" className='image' />   
                            </motion.div>
                        </div>
                    ))}
                </motion.div>
           </motion.div>
        </div>   
        </>
    )
}