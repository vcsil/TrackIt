import styled from "styled-components"
import React from "react";
import { AuthContext } from '../providers/Auth.js';


function Aviso( props ) {
    const { mensagem, sim, nao } = props;

    const { user } = React.useContext(AuthContext);

    return (
        <ContainerAviso>
            <BoxAviso>
                <h2>{user.name}.<br/>{mensagem}</h2>
                <Botoes>
                    <button onClick={nao} 
                        style={{"backgroundColor": "var(--cor-vermelho)"}}>Não</button>
                    <button onClick={sim} 
                        style={{"backgroundColor": "var(--cor-verde)"}}>Sim</button>
                </Botoes>
            </BoxAviso>
        </ContainerAviso>
    );
}

const ContainerAviso = styled.div`
    position: fixed;
    z-index: 5;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
`

const BoxAviso = styled.div`
    width: 350px;
    height: 300px;
    background-color: var(--cor-branco);
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    padding: 30px 36px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    h2 {
        font-size: 24px;
        text-align: center;
        line-height: 28px;
    }
`

const Botoes = styled.div`
    display: flex;
    justify-content: space-between;
    column-gap: 20px;


    button {
        width: 100px;
        height: 40px;
        color: var(--cor-branco);
        font-weight: 400;
        font-size: 18px;
    }
`

export default Aviso;