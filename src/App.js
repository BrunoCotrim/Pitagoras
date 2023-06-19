import './App.css';
import { useState } from 'react';
import BotaoEsp from './Componentes/botoes/BotaoEsp';
import Menu from './Componentes/Menu_Start/Menu';
import GameBox from './Componentes/botoes/maingame';
import CardPergunta from './Componentes/Core/CardPergunta';
import Contador from './Componentes/Diversos/Contador';
import Trilha from './Componentes/Diversos/Trilha';
import Pergunta from './DB/Perguntas';



function App() {
  
  const [NOME, setNome] = useState('');
  
  const catchName = (value) => { //Pega o nome do menu p enviar ao gamebox
    setNome(value);
  
  }

  return (

    <div className="App">
      <Menu nome={catchName}><GameBox nome={NOME}></GameBox></Menu>

    </div>

    );
}

export default App;
