import styled from "styled-components";

function HabitosItem( props ) {
    const { id, name, done, currentSequence, highestSequence, deixarVerde } = props;

    return (
        <ContainerHabito feito={done}>
            <BoxHabito>
                <Texto>
                    <h2>{name}</h2>
                    <h3>
                        Sequência atual: <SeqAtual feito={done}>{currentSequence} dias</SeqAtual><br/>
                        Seu recorde: <SeqAtual feito={done && currentSequence === highestSequence}>{highestSequence} dias</SeqAtual>
                    </h3>
                </Texto>
                <Check feito={done} onClick={() => deixarVerde(id)}>
                    <ion-icon name="checkmark-sharp"></ion-icon>
                </Check>
            </BoxHabito>
        </ContainerHabito>
    );
}

const ContainerHabito = styled.li`
    width: 100%;
    height: 94px;
    background-color: var(--cor-branco);
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    border: 2px solid ${props => props.feito ?
                            "var(--cor-verde)"
                            :
                            "transparent"};
`

const BoxHabito = styled.div`
    display: flex;
    justify-content: space-between;
`
const Texto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: var(--cor-preta);
    }

    h3 {
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: var(--cor-preta);
        margin-bottom: 5px;
    }
`

const SeqAtual = styled.span`
    color: ${props => props.feito ?
                    "var(--cor-verde)"
                    :
                    "var(--cor-preta)"};
`

const Check = styled.div`
    width: 70px;
    height: 70px;
    background-color: ${props => props.feito ?
                            "var(--cor-verde)"
                            :
                            "var(--cor-cinza-boxcheck)"};
    border: ${props => props.feito ?
                            "0"
                            :
                            "1px solid var(--cor-cinza-boxcheck-border)"};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    ion-icon {
        width: 40px;
        height: 30px;
        color: var(--cor-branco);
    }
`


export default HabitosItem;