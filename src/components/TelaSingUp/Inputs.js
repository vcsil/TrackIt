import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Inputs( props ) {
    const { setEntrou } = props;

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [foto, setFoto] = useState('');

    function SubmitData(event) {
        event.preventDefault();
        setEntrou(true);
        navigate("/");
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
                    required></input>
                <input
                    placeholder="senha"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required></input>
                <input
                    placeholder="nome"
                    type="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required></input>
                <input
                    placeholder="foto"
                    type="url"
                    id="url"
                    value={foto}
                    onChange={(e) => setFoto(e.target.value)}
                    required></input>
                <Botao type="submit"> <p>Cadastrar</p> </Botao>
            </form>
        </>
    );
}

const Botao = styled.button`
    width: 100%;
    height: 46px;
    margin-bottom: 24px;
`

export default Inputs;