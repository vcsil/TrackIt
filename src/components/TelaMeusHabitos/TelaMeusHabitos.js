import { useState } from "react";
import styled from "styled-components"
import AdicionarHabito from "./AdicionarHabito";
import ListarHabitos from "./ListarHabitos";

const meusmeusHabitos = [
    {'id': 0, 'name': 'Ler 1 capítulo de livro', 'days': [1,3,5]},
    {'id': 1, 'name': 'Ler 1 capítulo de livro', 'days': [0,2,6]},
    {'id': 2, 'name': 'Ler 1 capítulo de livro', 'days': [3,5]}
]

function TelaMeusHabitos() {

    const [novoHabito, setNovoHabito] = useState(false);
    const [meusHabitos, setMeusHabitos] = useState([...meusmeusHabitos]);

    function criarNovoHabito() {
        setNovoHabito(!novoHabito);
    }

    return (
        <main>
            <CriarHabitos>
                <h2 className="titulo">Meus hábitos</h2>
                <button onClick={() => criarNovoHabito()} disabled={novoHabito}><p>+</p></button>
            </CriarHabitos>
            <AdicionarHabito novoHabito={novoHabito} setNovoHabito={setNovoHabito} />
            
            {
                meusHabitos.length > 0 ?
                meusHabitos.map(i => 
                    <ListarHabitos key={i.id}
                    id={i.id}
                    name={i.name}
                    days={i.days}
                    meusHabitos={meusHabitos}
                    setMeusHabitos={setMeusHabitos}/>
                )
                :
                <Paragrafo className="paragrafo">
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </Paragrafo>
            }
            
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


export default TelaMeusHabitos;