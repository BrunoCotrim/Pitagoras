import Contador from '../Diversos/Contador';
import './CardPergunta.css';
import './CardResposta.css';
import React, { useState, useEffect } from 'react';


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



const CardPergunta = (props) => {

    const [isShaking, setShaking] = useState(false);
    const [penalidade, setPenalizacao] = useState(0);
    const [fade, setFade] = useState(props.fade || '');
    const [tempoPerg, updateTempo] = useState(0);
    const [acerto, definirAcerto] = useState(false); 

    // handlers de escolhas
    const escolhaCerta = (resolve) => {
        console.log("escolhacerta");
        definirAcerto(true); //sinaliza para buscar o valor do timer
        
    }
    
    const escolhaErrada = () =>{
        setShaking(true); // treme a tela
        setPenalizacao(300); // adiciona valor na var para a filha

    }
    const fimAnimacao = () =>{
        setShaking(false); // para de tremer
    }

    useEffect(() => {
        setPenalizacao(0);
    },[penalidade]); // sempre que penalidade mudar ela reseta

    
    const guardarTempo = (valor) =>{
        updateTempo(valor);
        props.feedTimer(valor);
    }

 
    return(
        <div className={`Card ${isShaking ? 'shake' : ''}`}
        onAnimationEnd={fimAnimacao}>
            <div className='Card_Titulo'>
                <div><Contador 
                acerto={acerto} 
                penalidade={penalidade} 
                PescarTempo={guardarTempo}
                PararContagem={acerto} /></div>
                <h1>{props.diff}</h1>
                <div className='Botao_Fechar' onClick={props.fechar}></div>
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