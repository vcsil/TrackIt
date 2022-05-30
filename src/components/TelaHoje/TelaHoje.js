import React, { useEffect, useState } from "react";

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

function TelaHoje() {

    const [ check, setCheck ] = useState([...tarefas]);
    const { user, setUser } = React.useContext(AuthContext);

    const totalHabitos = check.length;
    const realizadosHabitos = (check.filter(i => i.done === true)).length;
    const porcentagemFeita = Math.round((realizadosHabitos/totalHabitos*100));

    function deixarVerde(id) {
        let objetoTarefas = [...check];
        objetoTarefas.forEach( tarefa => {
                                    if (tarefa.id === id) {
                                        tarefa.done = !tarefa.done
                                    }
        })
        setCheck([...objetoTarefas]);
    }

    useEffect(() => {
        setUser({...user, done: porcentagemFeita});
    }, [porcentagemFeita])

    return (
        <main>
            <Titulo feito={realizadosHabitos}>
                <h2 className="titulo">Segunda, 17/05</h2>
                {
                    realizadosHabitos ? 
                    <p className="paragrafo">{porcentagemFeita}% dos hábitos concluídos</p>
                    :
                    <p className="paragrafo">Nenhum hábito concluído ainda</p>
                }
            </Titulo>
            <HabitosLista>
                {
                    tarefas.map(i => 
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

export default TelaHoje;