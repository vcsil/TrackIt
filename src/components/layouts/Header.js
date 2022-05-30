import styled from 'styled-components';

function Header( props ) {

    const { entrou } = props;

    return (
        <Titulo entrou={entrou} >
            <h1>TrackIt</h1>
            <ImgPerfil />
        </Titulo>
    );
}

const Titulo = styled.header`
    background-color: var(--cor-azul-escuro);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    padding: 0 18px;

    display: ${props => props.entrou ? 
                        'var(--display-flex)' 
                        : 
                        'var(--display-none)'};

    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    z-index: 1;

    h1 {
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 50px;
        color: var(--cor-branco);
        cursor: pointer;
    }
`;

const ImgPerfil = styled.div`
    width: 50px;
    height: 50px;
    background-color: gray;
    border-radius: 100px;
`

export default Header;