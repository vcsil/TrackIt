import styled from "styled-components"
import Dia from "./ElementoSemana";

function DiasSemana( props ) {

    const { diaSelecionado, setDiaSelecionado, diasDoHabito, setDiasDoHabito, desabilitado } = props

    function marcaDia( id ) {
        const objetoTodosDias = diaSelecionado; // [{..},{..},{..}...]

        const jaEstaSelecionado = objetoTodosDias[id].selecionado; // true or false

        objetoTodosDias[id].selecionado = !jaEstaSelecionado; // !true or !false

        if (!diasDoHabito.includes(id)) {
            setDiasDoHabito([...diasDoHabito, id])
        } else {
            setDiasDoHabito(diasDoHabito.filter( i => i !== id))
        }
        setDiaSelecionado([...objetoTodosDias])
    }

    return (
        <Semana>
            {diaSelecionado.map(dia => 
                <Dia key={dia.id}
                    onClick={() => {
                        if (!desabilitado) {
                            marcaDia(dia.id)
                        }
                    }}
                    selecionado={dia.selecionado}> 

                    <p>{dia.sigla}</p>

                </Dia>
            )}
        </Semana>
    );
}

const Semana = styled.div`
    width: 234px;
    height: 30px;
    display: flex;
    column-gap: 4px;
    margin-bottom: 30px;
`

export default DiasSemana;