import styled from "styled-components";

function TelaHistorico() {
    return (
        <main>
            <Titulo>
                <h2 className="titulo">Histórico</h2>
                <p className="paragrafo">Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </Titulo>
        </main>
    )
}

const Titulo = styled.div`
    margin-top: 8px;
    margin-bottom: 28px;

    p {
        color: var(--cor-preta);
        margin-top: 20px;
    };
`

export default TelaHistorico;