
import './Botao_esp.css';
import React, { useState, useEffect } from 'react';

 const BotaoEsp = (props) => {
  const [conclusao, setConclusao] = useState(props.conclusao || 'X');
  const [tempo, setTempo] = useState(0);
  const [fade, setFade] = useState(props.n == 1 ? "fade" : "Separador");
  const [pergunta, setPergunta] = useState(0); // guardar o obj pergunta se necessario
  const [unlocked, setUnlocked] = useState(false);
  const [selected, setSelected] = useState(false);


  useEffect(() => {

    if (props.n === props.track){ // se o tracker estiver acima da pergunta ou nela ela estara desbloqueada
      setSelected(true);
      
    } else {
      setSelected(false);
    };

    if (props.n <= props.track){ // se o tracker estiver acima da pergunta ou nela ela estara desbloqueada
      setUnlocked(true);
    } else {
      return;
    };
    
    if (props.n < props.track){ // se o tracker estiver acima da pergunda a conclusao é positiva pos ela foi respondida corretamente
      setConclusao("OK");
    } else {
      return;
    };

    },[props.track]); // sempre que track mudar ele avalia

    useEffect(() => { // define o tempo quando a pergunta for encerrada
      if (selected){
        setTempo(0);
      } else{
        setTempo(props.tempo);
      }
    },[selected]);



  return (
    <>
    <div className={`casa_pergunta ${unlocked ? 'flippable' : ''}`}  onClick={selected ? props.onClick : null}>
      <div className={`${unlocked ? 'frontUnlocked' : 'front'}`} >
        {props.children}
      </div>
      <div className="back" >
        <p>{conclusao}</p>
        <p>{props.diff}</p>
        <p>{props.children}</p>
        <p>{`${Math.floor(tempo/10)}.${tempo % 10}`}</p>
      </div>
    </div>
    <div className={fade}></div> {/*separador*/}
    </>

  );
}

export default BotaoEsp;