import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    --cor-fundo-tela: #E5E5E5;
    --cor-branco: #FFFFFF;
    --cor-verde: #8FC549; 
    --cor-vermelho: red; 
    --cor-preta: #666666;

    --cor-azul-escuro: #126BA5;
    --cor-azul-claro: #52B6FF;

    --cor-cinza-letra: #DBDBDB;
    --cor-cinza-subtitle: #BABABA;
    --cor-cinza-borda: #D4D4D4;
    --cor-cinza-boxdia: #CFCFCF;
    --cor-cinza-boxcheck: #EBEBEB;
    --cor-cinza-boxcheck-border: #E7E7E7;

    --display-none: none;
    --display-flex: flex;
  }

  body {
    width: 100vw;
    height: 100vh;
    font-family: 'Lexend Deca';
    font-style: normal;
    background-color: var(--cor-fundo-tela);
  }

  body::-webkit-scrollbar {
    display: none;
  }

  .boxInputs {
    width: 100%;
  }

  .boxInputs > input {
    width: 100%;
    height: 45px;
    padding: 0 12px;
    margin-bottom: 6px;
    background: var(--cor-branco);
    border: 1px solid var(--cor-cinza-borda);
    border-radius: 5px;
  }

  input {
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #444444;
  }

  input::placeholder {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: var(--cor-cinza-letra);
    opacity: 1;
  }

  button {
    background: var(--cor-azul-claro);
    border: #126BA5;
    border-radius: 4.63636px;
  }

  button > p {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: var(--cor-branco);
  }

  button:hover {
    filter: brightness(0.9);
  }

  main{
    width: 100vw;
    height: 100vh;
    padding: 92px 18px 0;
    margin-bottom: 172px;
  }

  .titulo {
    font-weight: 400;
    font-size: 22.976px;
    line-height: 30px;
    color: var(--cor-azul-escuro);
  }

  .paragrafo {
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: var(--cor-preta);
  }
`

export default GlobalStyle;