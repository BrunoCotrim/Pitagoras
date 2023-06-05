import CardPergunta from '../Core/CardPergunta';
import Contador from '../Diversos/Contador';
import BotaoEsp from './BotaoEsp';
import './maingame.css';
import React, { useState } from 'react';



const GameBox = () => {

    const [mostrar, setMostrar] = useState(false);
    const [definicao, definirParam] = useState("");
    const [tempoTotal, setTempo] = useState(0);

    const Marcar_Tempo = (temp) => {
       setTempo(temp);
    }


    const Selec_Pergunta = (texto) =>{
        setMostrar(true);
        definirParam(texto) //definir parametros futuramente(dificuldade,titulo,etc)
    }

    return(
        <div className='Game_Box'> 
        <div className='Perguntas_Box'>
            {mostrar && <CardPergunta 
            fechar={() => setMostrar(false)} 
            diff={definicao} 
            feedTimer={Marcar_Tempo}></CardPergunta>}
        </div>
        <div className='Container_Game'>
            <div className='Container_Left'>
                <div className='Container_Clock'>
                <div className='timer-container'> 
                <div>Tempo Total</div>
                <div>{`${Math.floor(tempoTotal/10)}.${tempoTotal % 10}`}</div>
                </div>
                </div>

                <div className='Container_Info'>
                    <h2>Info</h2>
                </div>
            </div>

            <div className='Container_Right'> 
            <h1>Perguntas</h1>
                <div className='Container_Perguntas'>
                    <BotaoEsp onClick={!mostrar ? () => Selec_Pergunta("pergunta1"): null}>Pergunta 1</BotaoEsp>
                    <BotaoEsp onClick={!mostrar ? () => Selec_Pergunta("pergunta2"): null}>Pergunta 2</BotaoEsp>
                    <BotaoEsp fade="fade" onClick={() => console.log(mostrar)}>Vazio</BotaoEsp>
                </div>
            </div>
        </div>
        </div>
    );
}

export default GameBox;