import React, { Component } from "react";
import { useState } from "react";
import './Menu.css';

function Menu(){
    const [Girado , setGirado] = useState(false);
    const [JOGADOR, setJogador] = useState("Jogador");
    const [GAME, setGame] = useState(false);

    const handleName = (evento) =>{
        setJogador(evento.target.value);
    }
    
    const girarMenu = () => {
    setGirado(!Girado);
    console.log(JOGADOR);
    console.log(GAME);
    };

    return(
        <div className={`menu ${Girado ? 'girar' : ''}`}>
            <div className="frente">
                <button id="start" onClick={girarMenu}>Começar</button>
            </div>
            <div className="tras">
                <h2>Nome do Jogador</h2>
                <input type="text" id="nameInput" value={JOGADOR} onChange={handleName}></input>
                <div id="case1">
                    <button id="ok" className="confirm" onClick={() => setGame(true)}>OK</button>
                    <button id="cancelar" className="confirm" onClick={girarMenu}>Cancelar</button>
                </div>
            </div>
        </div>
    )
};

export default Menu;
