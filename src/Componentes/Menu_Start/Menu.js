import React, { Component, useEffect } from "react";
import { useState } from "react";
import './Menu.css';

function Menu(props){
    const [Girado , setGirado] = useState(false);
    const [GAME_START, setGame] = useState(false);



    const girarMenu = () => {
    setGirado(!Girado);
    };

    const handleOK = () => { //envia o nome e manda o jogo iniciar
        const inputValue = document.getElementById('nameInput').value;
        props.nome(inputValue)
        setGame(true);
      }




    return(
        <div className="GAMEENV">
        <div className={`${GAME_START ? 'fade' : `menu ${Girado ? 'girar' : ''}`}`}>
            <div className="frente">
                <button id="start" onClick={girarMenu}>Começar</button>
            </div>
            <div className="tras">
                <h2>Nome do Jogador</h2>
                <input type="text" id="nameInput" placeholder="Nome do Jogador"></input>
                <div id="case1">
                    <button id="ok" className="confirm" onClick={handleOK}>OK</button>
                    <button id="cancelar" className="confirm" onClick={girarMenu}>Cancelar</button>
                </div>
            </div>
        </div>
        {GAME_START && props.children}
        </div>
    )
};

export default Menu;
