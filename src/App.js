import './App.css';
import { useState } from 'react';
import BotaoEsp from './Componentes/botoes/BotaoEsp';
import Menu from './Componentes/Menu_Start/Menu';
import GameBox from './Componentes/botoes/maingame';
import CardPergunta from './Componentes/Core/CardPergunta';
import Contador from './Componentes/Diversos/Contador';
import Trilha from './Componentes/Diversos/Trilha';
import Pergunta from './DB/Perguntas';
import GeradorEnunciados from './Componentes/Core/CorePergunta';

function App() {
const estatico = false

  return (

     <div className="App">
    {/* <BotaoEsp>Titulo</BotaoEsp>
    <Menu/> */}
    {/* <GameBox></GameBox> */}
    {/* <Contador></Contador>
    <CardPergunta></CardPergunta> */}
    {/* <Trilha/> */}
    <Pergunta/>
    {/* <GeradorEnunciados></GeradorEnunciados> */}
    </div>

    );
}

export default App;
