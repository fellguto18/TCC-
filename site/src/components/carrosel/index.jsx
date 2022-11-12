import '../../common.scss'
import './index.scss'

import { useState , useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

import image1 from '../../assets/images/confirmarDoacao.png'
import image2 from '../../assets/images/donate_1.png'
import image3 from '../../assets/images/contribuir_1.png'
import image4 from '../../assets/images/logo.png'

const images = [image1, image2, image3, image4]

export default function Carousel(){
    const carousel = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])

    return(
        <>
        <div className='App'>
           <motion.div ref={carousel} className='carousel' whileTap={{ cursor : "grabbing"}}>
                <motion.div className='inner' drag="x" dragConstraints={{ right: 0, left: -width}} initial={{ x: 100}} animate={{ x: 0}} transition={{ duration: 0.8}}>

                    {images.map(item => (
                        <motion.div className='image' key={item}>
                           <img src={item} alt="imagem" />     
                        </motion.div>
                    ))}

                </motion.div>
           </motion.div>
        </div>   
        </>
    )
}