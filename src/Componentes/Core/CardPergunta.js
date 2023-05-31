import Contador from '../Diversos/Contador';
import './CardPergunta.css';
import './CardResposta.css';
import React, { useState } from 'react';


const CardResposta = (props) => {
    const cliqueBotao = () => {
      props.onClick();
    };
  
    return (
      <button className='Multipla_escolha' onClick={cliqueBotao}>
        {props.children}
      </button>
    );
  };



const CardPergunta = () => {

    const [isShaking, setShaking] = useState(false);
    const [adicional, adicionarTempo] = useState(0);

    const escolhaCerta = () => {
        console.log("escolhacerta");
    }
    const escolhaErrada = () =>{
        setShaking(true);
        adicionarTempo(50);
    }
    const fimAnimacao = () =>{
        setShaking(false);
    }

 
    return(
        <div className={`Card ${isShaking ? 'shake' : ''}`}
        onAnimationEnd={fimAnimacao}>
            <div className='Card_Titulo'>
                <div><Contador adicional={adicional}/></div>
                <h1>Título da Carta</h1>
                <div>X</div>
            </div>
            <div className='Card_Pergunta'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed ullamcorper lectus. Nulla vel libero tincidunt, semper urna id, commodo nisl? </p>
            </div>
            <div className='Card_Resposta' >
                <CardResposta onClick={escolhaCerta}>Resposta Certa</CardResposta>
                <CardResposta onClick={escolhaErrada}>Resposta Errada</CardResposta>
                <CardResposta onClick={escolhaErrada}>Resposta Errada</CardResposta>
                <CardResposta onClick={escolhaErrada}>Resposta Errada</CardResposta>
            </div>

        </div>
    );
}

export default CardPergunta;