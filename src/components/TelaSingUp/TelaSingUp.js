import styled from "styled-components";
import { Link } from "react-router-dom";


import logo from '../../assets/image/logo.png'
import Inputs from './Inputs'

function TelaLogin( props ) {
    const { setEntrou } = props;

    setEntrou(false)

    return (
        <>
            <Login>
                <Logotipo>
                    <img src={logo} alt="logo"/>
                    <h1>TrackIt</h1>
                </Logotipo>
                <Inputs setEntrou={setEntrou}/>
                <Link to={"/"} style={{ textDecoration: 'none' }}>
                    <LogSigIn>Já tem uma conta? Faça login!</LogSigIn>
                </Link>
            </Login>
        </>
    );
}

const Login = styled.div`
    width: 100vw ;
    height: 100vh;
    background-color: var(--cor-branco);
    z-index: 3;
    padding: 68px 36px 0px;
`

const Logotipo = styled.div`
    display: grid;
    justify-items: center;
    margin-bottom: 32.62px;

    img {
        width: 180px;
        height: 90px;
    }

    h1 {
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 68.982px;
        line-height: 86px;
        color: var(--cor-azul-escuro);
    }
`

const LogSigIn = styled.p`
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: var(--cor-azul-claro);
`


export default TelaLogin;