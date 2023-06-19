import Pergunta, { PERGUNTA } from '../../DB/Perguntas';
import CardPergunta from '../Core/CardPergunta';
import GameOverScreen from '../Core/GameOverScreen';
import Contador from '../Diversos/Contador';
import Instrucoes from '../Diversos/instrucoes';
import BotaoEsp from './BotaoEsp';
import './maingame.css';
import React, { useState, useEffect } from 'react';



const GameBox = (props) => {

    const [mostrar, setMostrar] = useState(false);
    const [tempoTotal, setTempo] = useState(0);
    const [GameOver, setGameOver] = useState(false); // define se o jogo foi concluido

    // constantes para atualizacao do card de pergunta
    const [dificuldade, definirParam] = useState("");
    const [ObjPergunta, setPergunta] = useState("");
    const [Respostas, setRespostas] = useState("");
    const [Enunciado, setEnunc] = useState([]);
    const [currentQuestion, setCurrent] = useState(1);
    const [tempoIndiv, setTempoIndiv] = useState(0);
    const [JOGADOR, setJogador] = useState(props.nome)


    // constantes para futuras personalizacoes se necessario
    const ultimaPerg = 8; 
    const primeiraPerg = 1; 

    const Marcar_Tempo = (temp) => { //  Usado no feed timer para buscar o valor de tempo
       setTempo(temp);
       setTempoIndiv(0); // zera a variavel 
       setTempoIndiv(temp); //define a variavel como 0+valor atual

    }

    const avalFecharJanela = () => { // Avalia se a pergunta foi respondida corretamente com base no tempo salvo
        setMostrar(false);

        if (tempoIndiv>0){
            setCurrent(CQ => CQ + 1);
        }

    }

    const Selec_Pergunta = (texto) =>{ // Logica paga geracao da nova pergunta
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

    useEffect(() => { // Seta o fim do jogo
        if(currentQuestion>ultimaPerg){
            setGameOver(true);
            return;
        }
    },[currentQuestion]);


        // variavel mostrar && <componente> mostra o componente se ambos forem verdadeiros
    return(
        <div>
            {/* <button onClick={() => setGameOver(!GameOver)}>Virar</button> */}
        <div className={`Game_Box ${GameOver ? 'Container_Game_DONE' : ''}`}> 
        
            <div className={`Container_Game`}>

            <div className='Perguntas_Box'>
            {mostrar && <CardPergunta 
            fechar={avalFecharJanela} 
            diff={dificuldade} 
            feedTimer={Marcar_Tempo}
            pergAtual={ObjPergunta}
            enunciados={Enunciado}
            resp={Respostas}></CardPergunta>}
            </div>

            <div className='Container_Left'>

                <div className='tempo-container'> 
                <div className='Titulo_Tempo'>Tempo Total</div>
                <div className='Tempo_T'>{`${Math.floor(tempoTotal/10)}.${tempoTotal % 10} seg`}</div>
                </div>
                <div className='instruct'><Instrucoes/></div>

            </div>

            <div className='Container_Right'> 
            <h1>Perguntas</h1>
                <div className='Container_Perguntas'>
                    <BotaoEsp tempo={tempoIndiv} n={8} track={currentQuestion} diff={"Difícil"} onClick={!mostrar ? () => Selec_Pergunta("Difícil"): null}>Pergunta 8</BotaoEsp>
                    <BotaoEsp tempo={tempoIndiv} n={7} track={currentQuestion} diff={"Difícil"} onClick={!mostrar ? () => Selec_Pergunta("Difícil"): null}>Pergunta 7</BotaoEsp>
                    <BotaoEsp tempo={tempoIndiv} n={6} track={currentQuestion} diff={"Médio"} onClick={!mostrar ? () => Selec_Pergunta("Médio"): null}>Pergunta 6</BotaoEsp>
                    <BotaoEsp tempo={tempoIndiv} n={5} track={currentQuestion} diff={"Médio"} onClick={!mostrar ? () => Selec_Pergunta("Médio"): null}>Pergunta 5</BotaoEsp>
                    <BotaoEsp tempo={tempoIndiv} n={4} track={currentQuestion} diff={"Médio"} onClick={!mostrar ? () => Selec_Pergunta("Médio"): null}>Pergunta 4</BotaoEsp>
                    <BotaoEsp tempo={tempoIndiv} n={3} track={currentQuestion} diff={"Médio"} onClick={!mostrar ? () => Selec_Pergunta("Médio"): null}>Pergunta 3</BotaoEsp>
                    <BotaoEsp tempo={tempoIndiv} n={2} track={currentQuestion} diff={"Fácil"} onClick={!mostrar ? () => Selec_Pergunta("Fácil"): null}>Pergunta 2</BotaoEsp>
                    <BotaoEsp tempo={tempoIndiv} n={1} track={currentQuestion} diff={"Fácil"} onClick={!mostrar ? () => Selec_Pergunta("Fácil"): null}>Pergunta 1</BotaoEsp>
                </div>
            </div>
            </div>
            <div className='Game_Over_Container'>
                <GameOverScreen user={JOGADOR}>{`${Math.floor(tempoTotal/10)}.${tempoTotal % 10} Segundos`}</GameOverScreen>
            </div>
        </div>
        </div>
    );
}

export default GameBox;