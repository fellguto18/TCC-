import { useEffect } from "react";
import { useState } from "react";
import { listarTodosDoadores, listarDoadorNome, listarDoadorCpf,listarDoadorEmail } from "../../api/adminApi.js";
import MenuAdmin from "../../components/menuAdmin/index.jsx";

import './index.scss'


import lupa from "../../assets/images/lupa_1.png";

export default function Index(){
    const [doador, setDoador] = useState([]);

    async function carregarTodosDoadores(){
        const resp = await listarTodosDoadores();
        setDoador(resp);
    }

    useEffect(() => {
        carregarTodosDoadores();
    }, [])


    return (
        <div className="page">
            <MenuAdmin/>
            <img className="lupa" src={lupa} />
            <div>
                <p className="Nome"> Fellipe </p>
                <p className="info_doador">Projeto cadeira de Rodas | R$50,00 | 3/10/2022</p>
            </div>

        </div>
    )
}