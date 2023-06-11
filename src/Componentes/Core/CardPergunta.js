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
    const [tempoPerg, updateTempo] = useState(0);
    const [cancelado , setCancelado] = useState(false); // fechar a janela
    const [acerto, definirAcerto] = useState(false); 
    const [pergunta, setPergunta] = useState(props.pergAtual || 0); // PARA USO FUTURO SE NECESSARIO
    const [Enunciados, setEnunc] = useState(props.enunciados || 0);
    const [resp, setResp] = useState(props.resp || 0);

    // handlers de escolhas
    const escolhaCerta = (resolve) => {
        console.log("escolhacerta");
        definirAcerto(true); //sinaliza para buscar o valor do timer
        
    }
    
    const escolhaErrada = () =>{
        setShaking(true); // treme a tela
        setPenalizacao(300); // adiciona valor na var para a filha

    }

    const handleEscolha = (aval) => {
        if (aval) {
            escolhaCerta();
        } else {
            escolhaErrada();
        }
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
                PararContagem={acerto || cancelado} /></div>
                <h1>{props.diff}</h1>
                <div className='Botao_Fechar' onClick={props.fechar}></div>
            </div>
            <div className='Card_Pergunta'>
                <p>{Enunciados[0]}</p>
                <h3>{Enunciados[1]}</h3>
            </div>
            <div className='Card_Resposta' >
                {/* <CardResposta onClick={escolhaCerta}>Resposta Certa</CardResposta>
                <CardResposta onClick={escolhaErrada}>Resposta Errada</CardResposta>
                <CardResposta onClick={escolhaErrada}>Resposta Errada</CardResposta>
                <CardResposta onClick={escolhaErrada}>Resposta Errada</CardResposta> */}

                <CardResposta onClick={() => handleEscolha(resp[0][1])}>{resp[0][0]}</CardResposta>
                <CardResposta onClick={() => handleEscolha(resp[2][1])}>{resp[2][0]}</CardResposta>
                <CardResposta onClick={() => handleEscolha(resp[1][1])}>{resp[1][0]}</CardResposta>
                <CardResposta onClick={() => handleEscolha(resp[3][1])}>{resp[3][0]}</CardResposta>
            </div>

        </div>
    );
}

export default CardPergunta;