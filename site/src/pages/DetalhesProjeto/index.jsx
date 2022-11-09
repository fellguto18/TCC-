import '../../common.scss'
import './index.scss'


import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { listarProjetoPorID } from '../../api/projetoApi';
import { useState } from 'react';

//componentes
import NavBarComp from '../../components/header'
import DetalheProjeto from '../../components/detalhesProjeto';


export default function DetalhesProjeto(){

    const [projeto, setProjeto] = useState({});

    const { idParam } = useParams();

    useEffect(() => {
        carregarProjeto();
    }, []);

    async function carregarProjeto(){
        const resposta = await listarProjetoPorID(idParam);
        setProjeto(resposta);
    }

    return(
        <>
            <main>
                <NavBarComp/>
                <DetalheProjeto projeto={projeto} />

            </main>
        </>
    )
}