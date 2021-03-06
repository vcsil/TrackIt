import React, { useState }  from "react";
import axios from "axios";
import { AuthContext } from '../../providers/Auth.js';

import styled from "styled-components";
import Dia from "./ElementoSemana";
import Aviso from "../Aviso";

const dias = [
    {"id": 0, "sigla": "D"},
    {"id": 1, "sigla": "S"},
    {"id": 2, "sigla": "T"},
    {"id": 3, "sigla": "Q"},
    {"id": 4, "sigla": "Q"},
    {"id": 5, "sigla": "S"},
    {"id": 6, "sigla": "S"}
];


function ListarHabitos( props ) {

    const { user } = React.useContext(AuthContext);

    const { id, name, days,  atualiza, setAtualiza, tamanho } = props  //meusHabitos, setMeusHabitos,

    const [mostraAviso, setMostraAviso] = useState([]);

    function remover(id) {
        setMostraAviso(
            [...mostraAviso, 
            <Aviso key={0}
                mensagem={`Deseja excluir o hábito ${id}?`}
                sim={() => apaga(id)}
                nao={() => nada()}/>]
        );
    }

    function apaga(id) {
        // setMeusHabitos(meusHabitos.filter(habito => habito.id !== id));

        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        };

        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;
        const promise = axios.delete(URL, config);
        promise.then(response => {
            console.log(response.data)
            setAtualiza(!atualiza)
        })
        promise.catch(err => {
            alert(err.response.statusText)
        });

    }

    function nada() {
        setMostraAviso([])
    }

    return (
        <ContainerHabito tamanho={tamanho}>
            <Habito>
                <p>{name}</p>
                <ion-icon name="trash-outline" 
                    style={{"width": "14px",
                            "height": "16px",
                            "cursor": "pointer"}}
                    onClick={() => remover(id)}></ion-icon>
            </Habito>
            <Semana>
                {dias.map((dia) => 
                    <Dia key={dia.id}
                        selecionado={days.includes(dia.id)}> 

                        <p>{dia.sigla}</p>

                    </Dia>
                )}
            </Semana>
            {mostraAviso.map(i => i)}
        </ContainerHabito>
    );
}

const ContainerHabito = styled.div`
    width: 100%;
    height: 90px;
    background: var(--cor-branco);
    border-radius: 5px;
    padding: 12px 10px 16px 16px;
    margin-bottom: 10px;

    &:nth-child(${props => props.tamanho+2}) {
        margin-bottom: 112px;
    }
`

const Habito = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 8px;

    p {
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: var(--cor-preta);

    }
`

const Semana = styled.div`
    width: 234px;
    height: 30px;
    display: flex;
    column-gap: 4px;
    margin-bottom: 30px;
`

export default ListarHabitos;