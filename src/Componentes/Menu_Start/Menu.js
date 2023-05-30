import React, { Component } from "react";
import { useState } from "react";
import './Menu.css';

function Menu(){
    const [Girado , setGirado] = useState(false);
    
    const girarMenu = () => {
    setGirado(!Girado);
    };

    return(
        <div className={`menu ${Girado ? 'girar' : ''}`}>
            <div className="frente">
                <button id="start" onClick={girarMenu}>Começar</button>
            </div>
            <div className="tras">
                <h2>Nome do Jogador</h2>
                <input type="text" id="nameInput" placeholder="Qual seu nome?"></input>
                <div id="case1">
                    <button id="ok" className="confirm">OK</button>
                    <button id="cancelar" className="confirm" onClick={girarMenu}>Cancelar</button>
                </div>
            </div>
        </div>
    )
};

export default Menu;
