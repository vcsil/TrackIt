import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react";

import Reset from '../assets/styles/reset.js';
import GlobalStyle from '../assets/styles/globalStyles.js';
import Header from './layouts/Header.js';
import Footer from './layouts/Footer.js';
import TelaLogin from './TelaLogin/TelaLogin.js';
import TelaSingUp from './TelaSingUp/TelaSingUp.js';
import TelaMeusHabitos from './TelaMeusHabitos/TelaMeusHabitos.js';
import TelaHoje from './TelaHoje/TelaHoje.js';
import TelaHistorico from './TelaHistorico.js';
import { AuthContext } from '../providers/Auth.js';

function App() {

    const { user } = React.useContext(AuthContext);

    const entrou = user.entrou;

    return (
        <BrowserRouter>
            <GlobalStyle />
            <Reset />
            
            <Header entrou={entrou}/>

            <Routes>
                <Route path='/' element={<TelaLogin />} />
                <Route path='/cadastro' element={<TelaSingUp />} />
                
                <Route path='/hoje' element={<TelaHoje />} />
                <Route path='/habitos' element={<TelaMeusHabitos />} />
                <Route path='/historico' element={<TelaHistorico />} />
            </Routes>
            <Footer entrou={entrou}/>
        </ BrowserRouter>
    )
}

export default App;