import styled from "styled-components";

const Dia = styled.div`
    width: 30px;
    height: 30px;
    background-color: ${ props => props.selecionado ?
                            "var(--cor-cinza-boxdia)"
                            :
                            "var(--cor-branco)"};
    border: 1px solid ${ props => props.selecionado ?
                            "var(--cor-cinza-boxdia)"
                            :
                            "var(--cor-cinza-borda)"};

    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    p {
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: ${ props => props.selecionado ?
                    "var(--cor-branco)"
                    :
                    "var(--cor-cinza-letra)"};
    }
`

export default Dia;