import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from '../../providers/Auth.js';
import { Bars } from  'react-loader-spinner'


function Inputs() {
    const { user, setUser } = React.useContext(AuthContext);

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [carregando, setCarregando] = useState(false);

    function entrando( { id, name, image, token } ) {
        setUser({...user, 
            id: id, 
            name: name, 
            image: image, 
            token: token,
            entrou: true});
        setCarregando(false);
        navigate("/hoje");
    }

    function SubmitData(event) {
        event.preventDefault();
        setCarregando(true);

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
        const promise = axios.post(URL, {
            email,
            password
        });
        promise.then(response => {
            entrando(response.data);
        })
        promise.catch(err => {
            alert(err.response.statusText)
        });
    }

    return (
        <>
            <form className="boxInputs" onSubmit={SubmitData}>
                <input
                    placeholder="email"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={carregando}
                    required></input>
                <input
                    placeholder="senha"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={carregando}
                    required></input>
                <Botao type="submit"
                    disabled={carregando}> 
                    {
                        carregando ? 
                        <Bars
                            height="40"
                            width="40"
                            color='white'
                            ariaLabel='loading'
                        />
                        :
                        <p>Entrar</p>
                    }
                </Botao>
            </form>
        </>
    );
}

const Botao = styled.button`
    width: 100%;
    height: 46px;
    margin-bottom: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default Inputs;