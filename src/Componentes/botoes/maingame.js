import Pergunta, { PERGUNTA } from '../../DB/Perguntas';
import CardPergunta from '../Core/CardPergunta';
import Contador from '../Diversos/Contador';
import BotaoEsp from './BotaoEsp';
import './maingame.css';
import React, { useState } from 'react';



const GameBox = () => {

    const [mostrar, setMostrar] = useState(false);
    const [tempoTotal, setTempo] = useState(0);
    // constantes para atualizacao do card de pergunta
    const [dificuldade, definirParam] = useState("");
    const [ObjPergunta, setPergunta] = useState("");
    const [Respostas, setRespostas] = useState("");
    const [Enunciado, setEnunc] = useState([]);

    const Marcar_Tempo = (temp) => { //  usado no feed timer para buscar o valor de tempo
       setTempo(temp);
    }


    const Selec_Pergunta = (texto) =>{
        let question = new PERGUNTA(texto); //objeto da pergunta
        setPergunta(question);

        let tipo = question.pergunta.tipo; // tipo da pergunta (subtracao, soma...)
        let respArray = question.pergunta.respostas; // opcoes de respostas
        setRespostas(respArray);

        let enunc = question.pergunta.enunciado; // enunciado
        let funcao = question.pergunta.termos; //segunda parte do enunciado
        setEnunc([enunc,funcao]);

        definirParam(texto); // definir parametros futuramente(dificuldade,titulo,etc)
        setMostrar(true); // faz a tela aparecer
    }
        // variavel mostrar && <componente> mostra o componente se ambos forem verdadeiros
    return(
        <div className='Game_Box'> 
        <div className='Perguntas_Box'>
            {mostrar && <CardPergunta 
            fechar={() => setMostrar(false)} 
            diff={dificuldade} 
            feedTimer={Marcar_Tempo}
            pergAtual={ObjPergunta}
            enunciados={Enunciado}
            resp={Respostas}></CardPergunta>}
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
                    <h2><Pergunta></Pergunta></h2>
                </div>
            </div>

            <div className='Container_Right'> 
            <h1>Perguntas</h1>
                <div className='Container_Perguntas'>
                    <BotaoEsp diff={"Difícil"} onClick={!mostrar ? () => Selec_Pergunta("Difícil"): null}>Pergunta 8</BotaoEsp>
                    <BotaoEsp diff={"Difícil"} onClick={!mostrar ? () => Selec_Pergunta("Difícil"): null}>Pergunta 7</BotaoEsp>
                    <BotaoEsp diff={"Médio"} onClick={!mostrar ? () => Selec_Pergunta("Médio"): null}>Pergunta 6</BotaoEsp>
                    <BotaoEsp diff={"Médio"} onClick={!mostrar ? () => Selec_Pergunta("Médio"): null}>Pergunta 5</BotaoEsp>
                    <BotaoEsp diff={"Médio"} onClick={!mostrar ? () => Selec_Pergunta("Médio"): null}>Pergunta 4</BotaoEsp>
                    <BotaoEsp diff={"Médio"} onClick={!mostrar ? () => Selec_Pergunta("Médio"): null}>Pergunta 3</BotaoEsp>
                    <BotaoEsp diff={"Fácil"} onClick={!mostrar ? () => Selec_Pergunta("Fácil"): null}>Pergunta 2</BotaoEsp>
                    <BotaoEsp fade="fade" diff={"Fácil"} onClick={!mostrar ? () => Selec_Pergunta("Fácil"): null}>Pergunta 1</BotaoEsp>
                </div>
            </div>
        </div>
        </div>
    );
}

export default GameBox;