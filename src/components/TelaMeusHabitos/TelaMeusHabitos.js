import React, { useState, useEffect } from "react";
import styled from "styled-components"
import axios from "axios";
import { AuthContext } from '../../providers/Auth.js';
import { Bars } from  'react-loader-spinner'

import AdicionarHabito from "./AdicionarHabito";
import ListarHabitos from "./ListarHabitos";

function TelaMeusHabitos() {

    const { user } = React.useContext(AuthContext);

    const [novoHabito, setNovoHabito] = useState(false);
    const [meusHabitos, setMeusHabitos] = useState([]);
    const [carregando, setCarregando] = useState(false);
    const [atualiza, setAtualiza] = useState(false);


    function criarNovoHabito() {
        setNovoHabito(!novoHabito);
    }

    useEffect(() => {
        setCarregando(true)

        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        };

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const promise = axios.get(URL, config);
        promise.then(response => {
            setCarregando(false);
            setMeusHabitos(response.data)
        })
        promise.catch(err => {
            setCarregando(false);
            alert(err.response.statusText)
        });

    },[atualiza])

    return (
        <main>
            <CriarHabitos>
                <h2 className="titulo">Meus hábitos</h2>
                <button onClick={() => criarNovoHabito()} disabled={novoHabito}><p>+</p></button>
            </CriarHabitos>
            <AdicionarHabito novoHabito={novoHabito} 
                setNovoHabito={setNovoHabito} 
                atualiza={atualiza}
                setAtualiza={setAtualiza}/>
            
            {
                carregando ? 
                <Centralizar>
                    <Bars
                        height="60"
                        width="66"
                        color='white'
                        ariaLabel='loading'
                    />
                </Centralizar>
                
                :
                meusHabitos.length > 0 ?
                    meusHabitos.map(i => 
                        <ListarHabitos key={i.id}
                        id={i.id}
                        name={i.name}
                        days={i.days}
                        meusHabitos={meusHabitos}
                        setMeusHabitos={setMeusHabitos}
                        tamanho={meusHabitos.length}
                        atualiza={atualiza}
                        setAtualiza={setAtualiza}/>
                    )
                    :
                    <Paragrafo className="paragrafo">
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </Paragrafo>
            }
            <Espaco />
            
        </main>
    )
}

const CriarHabitos = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    button {
        width: 40px;
        height: 35px;
        cursor: pointer;
    }

    button > p {
        font-size: 26.976px;
        line-height: 34px;
    }
`

const Paragrafo = styled.p`
    margin-top: 8px;
`
const Centralizar = styled.div`
    position: fixed;
    top: 340px;
    left: 160px;
`

const Espaco = styled.div`
    height: 1px;
    width: 100%;
`


export default TelaMeusHabitos;