import './App.css';
import { useState } from 'react';
import BotaoEsp from './Componentes/botoes/BotaoEsp';
import Menu from './Componentes/Menu_Start/Menu';
import GameBox from './Componentes/botoes/maingame';
import CardPergunta from './Componentes/Core/CardPergunta';
import Contador from './Componentes/Diversos/Contador';

function App() {
const estatico = false

  return (

     <div className="App">
    {/* <BotaoEsp>Titulo</BotaoEsp> */}
    {/* <Menu/> */}
    {/* <GameBox></GameBox> */}
    <CardPergunta></CardPergunta>
    {/* <Contador></Contador> */}
  
    </div>

    );
}

export default App;
