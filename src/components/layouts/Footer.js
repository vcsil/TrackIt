import React from "react"
import  {  CircularProgressbar, buildStyles }  from  'react-circular-progressbar' ; 
import  'react-circular-progressbar/dist/styles.css' ;

import styled from "styled-components"
import { AuthContext } from "../../providers/Auth";

function Footer( props ) {

    const { user } = React.useContext(AuthContext);

    const { entrou } = props;

    return (
        <Menu entrou={entrou}>
            <p>Hábitos</p>
            <p>Histórico</p>
            <Bolota>
                <CircularProgressbar
                    value={user.done}
                    text={"Hoje"}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                      backgroundColor: "var(--cor-azul-claro)",
                      textColor: "#fff",
                      pathColor: "#fff",
                      trailColor: "transparent",
                      lineHeight: "22px",
                      fontWeight: "400",
                      fontSize: "17.976px"
                    })}
                />
            </Bolota>
        </ Menu>
    );
}

const Menu = styled.footer`
    background-color: var(--cor-branco);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 70px;
    padding: 0 36px;

    display: ${props => props.entrou ? 
                        'var(--display-flex)' 
                        : 
                        'var(--display-none)'};

    justify-content: space-between;
    align-items: center;
    z-index: 2;

    p {
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: var(--cor-azul-claro);
        cursor: pointer;
    }
`
// aqui
const Bolota = styled.div`
    width: 92px;
    height: 92px;
    position: absolute;
    left: 142px;
    bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default Footer;