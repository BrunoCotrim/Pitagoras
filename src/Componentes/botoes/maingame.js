import BotaoEsp from './BotaoEsp';
import './maingame.css';
import React, { useState } from 'react';

const GameBox = () => {
    
    return(
        <div className='Container_Game'>
            <div className='Container_Left'>
                <div className='Container_Clock'>
                    <h1>Clock</h1>
                </div>

                <div className='Container_Info'>
                    <h2>Info</h2>
                </div>
            </div>

            <div className='Container_Right'> 
            <h1>Perguntas</h1>
                <div className='Container_Perguntas'>
                    <BotaoEsp>Pergunta 8</BotaoEsp>
                    <BotaoEsp>Pergunta 7</BotaoEsp>
                    <BotaoEsp>Pergunta 6</BotaoEsp>
                    <BotaoEsp>Pergunta 5</BotaoEsp>
                    <BotaoEsp>Pergunta 4</BotaoEsp>
                    <BotaoEsp>Pergunta 3</BotaoEsp>
                    <BotaoEsp>Pergunta 2</BotaoEsp>
                    <BotaoEsp fade="fade">Pergunta 1</BotaoEsp>
                </div>
            </div>

        </div>
    );
}

export default GameBox;