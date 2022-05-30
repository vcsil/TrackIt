import { useState } from "react"
import styled from "styled-components"
import DiasSemana from "./DiasSemana";

const dias = [
    {"id": 0, "sigla": "D", "selecionado": false},
    {"id": 1, "sigla": "S", "selecionado": false},
    {"id": 2, "sigla": "T", "selecionado": false},
    {"id": 3, "sigla": "Q", "selecionado": false},
    {"id": 4, "sigla": "Q", "selecionado": false},
    {"id": 5, "sigla": "S", "selecionado": false},
    {"id": 6, "sigla": "S", "selecionado": false}
];

function AdicionarHabito( props ) {


    const { novoHabito, setNovoHabito } = props;

    const [nomeDoHabito, setNomeDoHabito] = useState("");
    const [diaSelecionado, setDiaSelecionado] = useState([...dias]);
    const [diasDoHabito, setDiasDoHabito] = useState([]);

    function cancelar() {
        // dias.forEach((i) => {i.selecionado = false} );
        // setDiaSelecionado(dias);
        // setNomeDoHabito("");
        setNovoHabito(!novoHabito);
    }

    return (
        <HabitoNovo ativo={novoHabito} >
            <ContainerHabitoNovo ativo={novoHabito} className="boxInputs">
                <input
                    placeholder="nome do hábito"
                    type="text"
                    id="text"
                    value={nomeDoHabito}
                    onChange={(e) => setNomeDoHabito(e.target.value)}
                    required></input>
                
                <DiasSemana diaSelecionado={diaSelecionado} 
                    setDiaSelecionado={setDiaSelecionado}
                    diasDoHabito={diasDoHabito}
                    setDiasDoHabito={setDiasDoHabito}/>

                <Botoes>
                    <p onClick={() => cancelar()}>Cancelar</p>
                    <button> <p>Salvar</p> </button>
                </Botoes>
            </ContainerHabitoNovo>
        </HabitoNovo>
    );
}

const HabitoNovo = styled.form`
    height: ${props => props.ativo ?
                        "180px"
                        :
                        "0"};
    background-color: var(--cor-branco);
    border-radius: 6px;
    padding: ${props => props.ativo ?
                        "18px 18px 14px"
                        :
                        "0"};
    margin-bottom: 26px;
    transition: all 0.5s ease;

    input {
        margin-bottom: 10px;
    }
`

const Botoes = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;

    p {
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        color: var(--cor-azul-claro);
        margin-right: 22px;
        cursor: pointer;
    }

    p:hover {
        filter: brightness(0.9);
    }

    button {
        width: 84px;
        height: 35px;
        cursor: pointer;
    }

    button > p{
        width: 70px;
        font-size: 15.976px;
        line-height: 20px;
        text-align: center;
        color: #FFFFFF;
    }
`

const ContainerHabitoNovo = styled.div`
    display: ${props => props.ativo ?
                        "inherit"
                        :
                        "none"};
`

export default AdicionarHabito;