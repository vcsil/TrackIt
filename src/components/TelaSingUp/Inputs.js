import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Bars } from  'react-loader-spinner';


function Inputs() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    const [carregando, setCarregando] = useState(false)

    function SubmitData(event) {
        if (!carregando) {
            event.preventDefault();
            setCarregando(true)

            const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
            const promise = axios.post(URL, {
                email,
                name,
                image,
                password
            });
            promise.then(response => {
                setCarregando(false);
                navigate("/");
            })
            promise.catch(err => {
                navigate("/cadastro")
                setCarregando(false)
                alert(err.response.statusText);
            });
                
        }
    }

    return (
        <>
            <form className="boxInputs" 
                onSubmit={SubmitData}>
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
                <input
                    placeholder="nome"
                    type="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={carregando}
                    required></input>
                <input
                    placeholder="image"
                    type="url"
                    id="url"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
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
                        <p>Cadastrar</p>
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