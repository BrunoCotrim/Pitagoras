
import './Botao_esp.css';
import React, { useState } from 'react';

 const BotaoEsp = (props) => {
  const [conclusao, setConclusao] = useState(props.conclusao || 'O / X');
  const [dificuldade, setDificuldade] = useState(props.dificuldade || 'Diff');
  const [tempo, setTempo] = useState(props.tempo || 'Tempo');
  const [fade, setFade] = useState(props.fade || "Separador");

  return (
    <>
    <div className="casa_pergunta" onClick={props.onClick}>
      <div className="front" >
        {props.children}
      </div>
      <div className="back" >
        <p>{conclusao}</p>
        <p>{dificuldade}</p>
        <p>{props.children}</p>
        <p>{tempo}</p>
      </div>
    </div>
    <div className={fade}></div>
    </>

  );
}

export default BotaoEsp;