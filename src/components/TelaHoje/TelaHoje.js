import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import axios from "axios";
import { Bars } from  'react-loader-spinner'

import styled from "styled-components";
import HabitosItem from "./HabitosItem";
import { AuthContext } from '../../providers/Auth.js';

const tarefas = [
    {
        "id": 0,
        "name": "Ler 1 capítulo de livro",
        "done": true,
        "currentSequence": 3,
        "highestSequence": 5
    },
    {
        "id": 1,
        "name": "Ler 1 capítulo de livro",
        "done": true,
        "currentSequence": 3,
        "highestSequence": 3
    },
    {
        "id": 2,
        "name": "Ler 1 capítulo de livro",
        "done": false,
        "currentSequence": 1,
        "highestSequence": 5
    },
]

const semana = {
    0: 'Domingo',
    1: 'Segunda',
    2: 'Terça',
    3: 'Quarta',
    4: 'Quinta',
    5: 'Sexta',
    6: 'Sábado',
}

function TelaHoje() {

    const diaMes = dayjs().locale('pt-br').format('DD/MM');
    const diaSemana = dayjs().day();

    const [ check, setCheck ] = useState([]);
    const [ carregando, setCarregando ] = useState(false);
    const { user, setUser } = React.useContext(AuthContext);

    const totalHabitos = check.length;
    const realizadosHabitos = (check.filter(i => i.done === true)).length;
    const porcentagemFeita = Math.round((realizadosHabitos/totalHabitos*100));

    function deixarVerde(id) {
        let objetoTarefas = [...check];

        let concluida;

        objetoTarefas.forEach( tarefa => {
                                    if (tarefa.id === id) {
                                        tarefa.done = !tarefa.done;
                                        concluida = !tarefa.done;
                                    }
        });

        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        };
        
        if ( !concluida ) {
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
            const promise = axios.post(URL, objetoTarefas, config);
            promise.then(response => {
                setCheck([...objetoTarefas]);
            })
            promise.catch(err => {
                alert(err.response.statusText)
            });
        } else {
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
            const promise = axios.post(URL, objetoTarefas, config);
            promise.then(response => {
                setCheck([...objetoTarefas]);
            })
            promise.catch(err => {
                alert(err.response.statusText)
            });
        }
        

    };

    useEffect(() => {
        setUser({...user, done: porcentagemFeita});

        setCarregando(true);

        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        };

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const promise = axios.get(URL, config);
        promise.then(response => {
            setCarregando(false);
            setCheck(response.data)
        })
        promise.catch(err => {
            setCarregando(false);
            alert(err.response.statusText)
        });
    }, [porcentagemFeita])

    return (
        <main>
            <Titulo feito={realizadosHabitos}>
                <h2 className="titulo">{semana[diaSemana]}, {diaMes}</h2>
                {
                    realizadosHabitos ? 
                    <p className="paragrafo">{porcentagemFeita}% dos hábitos concluídos</p>
                    :
                    <p className="paragrafo">Nenhum hábito concluído ainda</p>
                }
            </Titulo>
            <HabitosLista>
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
                    check.map(i => 
                        <HabitosItem key={i.id}
                            id={i.id}
                            name={i.name}
                            done={i.done}
                            currentSequence={i.currentSequence}
                            highestSequence={i.highestSequence}
                            deixarVerde={deixarVerde}/>
                        )
                }
            </HabitosLista>
        </main>
    )
}

const Titulo = styled.div`
    margin-top: 8px;
    margin-bottom: 28px;

    p {
        color: ${props => props.feito ?
                            "var(--cor-verde)"
                            :
                            "var(--cor-cinza-subtitle)"}
    };
`

const HabitosLista = styled.ul`
`

const Centralizar = styled.div`
    position: fixed;
    top: 340px;
    left: 160px;
`

export default TelaHoje;